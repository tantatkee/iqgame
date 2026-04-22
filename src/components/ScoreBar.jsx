import React from 'react';

export default function ScoreBar({ subject, score, currentQuestion, totalQuestions, streak }) {
  const progress = ((currentQuestion - 1) / totalQuestions) * 100;

  return (
    <div className="score-bar-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div className="score-bar">
        <div className="score-bar-subject">
          <span>{subject.icon}</span>
          <span>{subject.name}</span>
        </div>
        
        <div className="score-bar-info">
          {streak >= 2 && (
            <div className="streak-badge">
              🔥 {streak}
            </div>
          )}
          <div className="score-val">{score}</div>
          <div className="q-counter">Q{currentQuestion}/{totalQuestions}</div>
        </div>
      </div>
      
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
