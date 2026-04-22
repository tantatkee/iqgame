import React, { useState, useEffect, useCallback } from 'react';
import { getQuestionsForSession } from '../data';
import { sounds } from '../utils/sounds';
import { calculateQuestionXP } from '../utils/scoring';
import Timer from './Timer';
import ScoreBar from './ScoreBar';
import PuzzleRenderer from './PuzzleRenderer';

const Q_DURATION = 30;

export default function Game({ subject, difficulty, onFinish }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [stats, setStats] = useState({ correct: 0, totalXP: 0 });
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState(null); // { isCorrect: bool, xpGained: int }
  const [isGameOver, setIsGameOver] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(Q_DURATION);

  useEffect(() => {
    const q = getQuestionsForSession(subject.id, difficulty);
    setQuestions(q);
  }, [subject.id, difficulty]);

  const handleAnswer = useCallback((userAnswer) => {
    if (feedback || isGameOver) return;

    const currentQ = questions[currentIndex];
    const isCorrect = userAnswer.toString().toUpperCase() === currentQ.answer.toString().toUpperCase();

    if (isCorrect) {
      sounds.correct();
      const newStreak = streak + 1;
      const xp = calculateQuestionXP(timeRemaining, Q_DURATION, difficulty, newStreak);
      
      setScore(s => s + xp);
      setStats(prev => ({ correct: prev.correct + 1, totalXP: prev.totalXP + xp }));
      setStreak(newStreak);
      setFeedback({ isCorrect: true, xpGained: xp, userAnswer });
    } else {
      sounds.wrong();
      setStreak(0);
      setFeedback({ isCorrect: false, xpGained: 0, userAnswer });
    }

    // Delay before next question
    setTimeout(() => {
      setFeedback(null);
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(prev => prev + 1);
        setTimeRemaining(Q_DURATION);
      } else {
        setIsGameOver(true);
      }
    }, 1800);
  }, [currentIndex, questions, feedback, isGameOver, streak, timeRemaining, difficulty]);

  useEffect(() => {
    if (isGameOver) {
      onFinish({
        score,
        correct: stats.correct,
        total: questions.length,
        xpGained: stats.totalXP,
        accuracy: Math.round((stats.correct / questions.length) * 100)
      });
    }
  }, [isGameOver, onFinish, score, stats, questions.length]);

  if (questions.length === 0) return <div className="screen">Loading brain power...</div>;
  
  const currentQ = questions[currentIndex];

  return (
    <div className="screen" style={{ '--accent': `var(${subject.accentVar})`, '--glow': `var(${subject.glowVar})` }}>
      <div className="game-screen">
        <ScoreBar
          subject={subject}
          score={score}
          currentQuestion={currentIndex + 1}
          totalQuestions={questions.length}
          streak={streak}
        />

        <div className="question-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="question-type-tag">{currentQ.type}</div>
            <Timer
              duration={Q_DURATION}
              isActive={!feedback && !isGameOver}
              onTimeUp={() => handleAnswer('')}
              onTick={(t) => setTimeRemaining(t)}
            />
          </div>

          <h2 className="question-text">{currentQ.question}</h2>
          
          <PuzzleRenderer
            puzzle={currentQ}
            onAnswer={handleAnswer}
            feedback={feedback}
            disabled={!!feedback}
          />

          {feedback && (
            <div className={`feedback-banner ${feedback.isCorrect ? 'correct' : 'wrong'}`}>
              <span className="feedback-icon">{feedback.isCorrect ? '✨' : '❌'}</span>
              <div className="feedback-text">
                {feedback.isCorrect ? (
                  <>Excellent! <strong>+{feedback.xpGained} XP</strong></>
                ) : (
                  <>Oops! Correct was <strong>{currentQ.answer}</strong></>
                )}
              </div>
            </div>
          )}

          {!feedback && currentQ.hint && (
            <p className="question-hint">Tip: {currentQ.hint}</p>
          )}
        </div>
      </div>
    </div>
  );
}
