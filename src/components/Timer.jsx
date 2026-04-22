import React, { useEffect, useState } from 'react';
import { sounds } from '../utils/sounds';

export default function Timer({ duration, onTimeUp, isActive }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const size = 60;
  const strokeWidth = 4;
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        if (prev <= 5) {
          sounds.tick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, timeLeft, onTimeUp]);

  const offset = circumference - (timeLeft / duration) * circumference;
  const color = timeLeft <= 5 ? 'var(--wrong)' : 'var(--accent)';

  return (
    <div className="timer-wrap">
      <div className="timer-container">
        <svg width={size} height={size} className="timer-ring-svg">
          <circle
            className="timer-ring-bg"
            cx={center}
            cy={center}
            r={radius}
          />
          <circle
            className="timer-ring-fill"
            cx={center}
            cy={center}
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            stroke={color}
          />
        </svg>
        <span className="timer-label" style={{ color }}>{timeLeft}</span>
      </div>
    </div>
  );
}
