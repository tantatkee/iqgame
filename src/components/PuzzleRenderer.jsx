import React, { useState } from 'react';

export default function PuzzleRenderer({ puzzle, onAnswer, feedback, disabled }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled || !inputValue.trim()) return;
    onAnswer(inputValue.trim().toUpperCase());
    setInputValue('');
  };

  // Multiple Choice Question
  if (puzzle.type === 'mcq') {
    return (
      <div className="options-grid">
        {puzzle.options.map((option, idx) => {
          let className = 'option-btn';
          if (feedback) {
            if (option === puzzle.answer) className += ' correct-ans';
            else if (option === feedback.userAnswer) className += ' wrong-ans';
          }
          return (
            <button
              key={idx}
              className={className}
              onClick={() => onAnswer(option)}
              disabled={disabled}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }

  // Fill in the blank / Number answer
  if (puzzle.type === 'fill' || puzzle.type === 'sequence' || puzzle.type === 'unscramble') {
    const isUnscramble = puzzle.type === 'unscramble';
    const isSequence = puzzle.type === 'sequence';

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {isUnscramble && (
          <div className="scramble-display">
            {puzzle.scrambled}
          </div>
        )}

        {isSequence && (
          <div className="sequence-display">
            {puzzle.sequence.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className={`seq-item ${item === '?' ? 'unknown' : ''}`}>
                  {item}
                </div>
                {idx < puzzle.sequence.length - 1 && <span className="seq-arrow">→</span>}
              </React.Fragment>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="fill-input-wrap">
          <input
            type="text"
            className="fill-input"
            placeholder={isUnscramble ? "Type word..." : "Type answer..."}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={disabled}
            autoFocus
          />
          <button type="submit" className="btn-submit" disabled={disabled || !inputValue.trim()}>
            SUBMIT
          </button>
        </form>
      </div>
    );
  }

  return <div>Unknown puzzle type</div>;
}
