import React from 'react';

const DIFFICULTIES = [
  { id: 'easy', name: 'Easy', icon: '🌱', desc: 'Warm up your brain', stars: '★☆☆' },
  { id: 'medium', name: 'Medium', icon: '🔥', desc: 'Steady challenge', stars: '★★☆' },
  { id: 'hard', name: 'Hard', icon: '⚡', desc: 'Expert level puzzles', stars: '★★★' },
];

export default function DifficultyPicker({ subject, onSelectDifficulty, onBack }) {
  return (
    <div className="screen" style={{ '--accent': `var(${subject.accentVar})`, '--glow': `var(${subject.glowVar})` }}>
      <button className="btn-back" onClick={onBack}>
        <span>←</span> Back to subjects
      </button>

      <div className="difficulty-header">
        <span className="subject-icon" style={{ fontSize: '3rem' }}>{subject.icon}</span>
        <h2>{subject.name} Challenge</h2>
        <p>Pick a difficulty level to start your session</p>
      </div>

      <div className="difficulty-screen">
        <div className="diff-cards">
          {DIFFICULTIES.map((diff) => (
            <div
              key={diff.id}
              className="diff-card"
              onClick={() => onSelectDifficulty(diff.id)}
            >
              <span className="diff-icon">{diff.icon}</span>
              <div className="diff-info">
                <div className="diff-name">{diff.name}</div>
                <div className="diff-desc">{diff.desc}</div>
              </div>
              <div className="diff-stars">{diff.stars}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
