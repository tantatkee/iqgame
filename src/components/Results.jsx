import React, { useEffect, useState } from 'react';
import { sounds } from '../utils/sounds';
import { getStarRating, persistence } from '../utils/scoring';

export default function Results({ subject, results, onReplay, onHome }) {
  const [stars, setStars] = useState(0);
  const stats = persistence.getStats(subject.id);
  const isNewHigh = results.score > stats.highScore;

  useEffect(() => {
    const s = getStarRating(results.accuracy);
    setStars(s);
    if (s >= 2) sounds.levelUp();
    
    // Save stats to localStorage
    persistence.saveStats(subject.id, results);
  }, [results, subject.id]);

  const trophy = results.accuracy >= 90 ? '🏆' : results.accuracy >= 70 ? '🥈' : '🥉';

  return (
    <div className="screen" style={{ '--accent': `var(${subject.accentVar})`, '--glow': `var(${subject.glowVar})` }}>
      <div className="results-screen">
        <div className="results-trophy">{trophy}</div>
        <h2 className="results-title">Challenge Complete!</h2>
        
        <div className="results-stars">
          {[1, 2, 3].map(i => (
            <span key={i} className={`star ${i > stars ? 'empty' : ''}`}>⭐</span>
          ))}
        </div>

        <div className="results-stats">
          <div className="stat-block">
            <div className="stat-val">{results.score}</div>
            <div className="stat-label">Total Score</div>
          </div>
          <div className="stat-block">
            <div className="stat-val">{results.accuracy}%</div>
            <div className="stat-label">Accuracy</div>
          </div>
          <div className="stat-block">
            <div className="stat-val">{results.xpGained}</div>
            <div className="stat-label">XP Gained</div>
          </div>
        </div>

        {isNewHigh && (
          <div className="new-best">🔥 NEW PERSONAL BEST!</div>
        )}

        <div className="results-xp-bar">
          <div className="xp-label">✨</div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 700 }}>+{results.xpGained} XP</div>
            <div className="xp-desc">You are becoming a {subject.name} master!</div>
          </div>
        </div>

        <div className="results-actions">
          <button className="btn-primary" onClick={onReplay}>Play Again</button>
          <button className="btn-secondary" onClick={onHome}>Menu</button>
        </div>
      </div>
    </div>
  );
}
