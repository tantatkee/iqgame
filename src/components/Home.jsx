import React from 'react';
import { SUBJECTS } from '../data';
import { persistence, getLevel, getXPForNextLevel } from '../utils/scoring';

export default function Home({ onSelectSubject }) {
  const globalXP = persistence.getGlobalXP();
  const level = getLevel(globalXP);
  const nextLevelXP = getXPForNextLevel(level);
  const prevLevelXP = level > 1 ? getXPForNextLevel(level - 1) : 0;
  const progress = ((globalXP - prevLevelXP) / (nextLevelXP - prevLevelXP)) * 100;

  return (
    <div className="screen">
      <div className="brand">
        <span className="brand-icon">🧠</span>
        <h1 className="brand-name">IQGame</h1>
      </div>
      <p className="brand-tagline">Train your brain, level up your knowledge.</p>

      <div className="xp-banner">
        <div className="xp-total">Level {level}</div>
        <div className="xp-track">
          <div className="xp-track-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="xp-level">{globalXP} XP</div>
      </div>

      <div className="subjects-grid">
        {SUBJECTS.map((subject) => (
          <div
            key={subject.id}
            className={`subject-card ${subject.cssClass}`}
            onClick={() => onSelectSubject(subject)}
          >
            <span className="subject-icon">{subject.icon}</span>
            <span className="subject-name">{subject.name}</span>
            <span className="subject-desc">{subject.desc}</span>
            <span className="subject-badge">{subject.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
