/**
 * Scoring logic for IQGame
 * Calculates XP, Stars, and Levels
 */

// XP calculation constants
const BASE_XP = 100;
const STREAK_BONUS = 50;
const SPEED_BONUS_MAX = 100;
const DIFFICULTY_MULTIPLIER = {
  easy: 1,
  medium: 1.5,
  hard: 2
};

export function calculateQuestionXP(timeRemaining, maxTime, difficulty, streak) {
  const diffMult = DIFFICULTY_MULTIPLIER[difficulty] || 1;
  const speedBonus = Math.floor((timeRemaining / maxTime) * SPEED_BONUS_MAX);
  const streakBonus = streak > 1 ? (streak - 1) * STREAK_BONUS : 0;
  
  return Math.floor((BASE_XP + speedBonus + streakBonus) * diffMult);
}

export function getStarRating(accuracy, timeBonusPercentage) {
  if (accuracy === 100) return 3;
  if (accuracy >= 80) return 2;
  if (accuracy >= 50) return 1;
  return 0;
}

export function getLevel(totalXP) {
  // Level formula: floor(sqrt(totalXP / 500)) + 1
  return Math.floor(Math.sqrt(totalXP / 500)) + 1;
}

export function getXPForNextLevel(currentLevel) {
  // Formula: currentLevel^2 * 500
  return Math.pow(currentLevel, 2) * 500;
}

export const persistence = {
  saveStats: (subjectId, stats) => {
    const currentData = JSON.parse(localStorage.getItem('iqgame_stats') || '{}');
    const subjectData = currentData[subjectId] || { highScore: 0, totalXP: 0 };
    
    if (stats.score > subjectData.highScore) {
      subjectData.highScore = stats.score;
    }
    subjectData.totalXP += stats.xpGained;
    
    currentData[subjectId] = subjectData;
    localStorage.setItem('iqgame_stats', JSON.stringify(currentData));
    
    // Also update global XP
    const globalXP = parseInt(localStorage.getItem('iqgame_global_xp') || '0');
    localStorage.setItem('iqgame_global_xp', (globalXP + stats.xpGained).toString());
  },
  
  getStats: (subjectId) => {
    const data = JSON.parse(localStorage.getItem('iqgame_stats') || '{}');
    return data[subjectId] || { highScore: 0, totalXP: 0 };
  },
  
  getGlobalXP: () => {
    return parseInt(localStorage.getItem('iqgame_global_xp') || '0');
  }
};
