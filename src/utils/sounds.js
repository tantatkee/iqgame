/**
 * Web Audio API based sound generator for IQGame
 * Avoids external assets for speed and portability.
 */

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq, duration, type = 'sine', volume = 0.1) {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);

  gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start();
  oscillator.stop(audioCtx.currentTime + duration);
}

export const sounds = {
  click: () => playTone(600, 0.1, 'sine', 0.1),
  
  correct: () => {
    playTone(800, 0.3, 'sine', 0.1);
    setTimeout(() => playTone(1200, 0.4, 'sine', 0.1), 100);
  },
  
  wrong: () => {
    playTone(300, 0.3, 'square', 0.05);
    playTone(250, 0.3, 'square', 0.05);
  },
  
  levelUp: () => {
    const tones = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    tones.forEach((freq, i) => {
      setTimeout(() => playTone(freq, 0.4, 'sine', 0.1), i * 150);
    });
  },
  
  tick: () => playTone(1000, 0.05, 'sine', 0.05),
  
  timerWarning: () => playTone(400, 0.1, 'triangle', 0.1)
};
