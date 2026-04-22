// Subject registry — central config for all subjects

import { math }      from './math.js';
import { science }   from './science.js';
import { history }   from './history.js';
import { geography } from './geography.js';
import { language }  from './language.js';
import { logic }     from './logic.js';

export const SUBJECTS = [
  {
    id: 'math',
    name: 'Math',
    icon: '🔢',
    cssClass: 'math',
    desc: 'Numbers, algebra & geometry',
    tag: '25 puzzles',
    accentVar: '--math-color',
    glowVar: '--math-glow',
    data: math,
  },
  {
    id: 'science',
    name: 'Science',
    icon: '🔬',
    cssClass: 'science',
    desc: 'Biology, chemistry & physics',
    tag: '25 puzzles',
    accentVar: '--sci-color',
    glowVar: '--sci-glow',
    data: science,
  },
  {
    id: 'history',
    name: 'History',
    icon: '🏛️',
    cssClass: 'hist',
    desc: 'Events, figures & eras',
    tag: '25 puzzles',
    accentVar: '--hist-color',
    glowVar: '--hist-glow',
    data: history,
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: '🗺️',
    cssClass: 'geo',
    desc: 'Countries, capitals & landmarks',
    tag: '25 puzzles',
    accentVar: '--geo-color',
    glowVar: '--geo-glow',
    data: geography,
  },
  {
    id: 'language',
    name: 'Language',
    icon: '📖',
    cssClass: 'lang',
    desc: 'Vocabulary, words & grammar',
    tag: '25 puzzles',
    accentVar: '--lang-color',
    glowVar: '--lang-glow',
    data: language,
  },
  {
    id: 'logic',
    name: 'Logic',
    icon: '🧩',
    cssClass: 'logic',
    desc: 'Patterns, riddles & deduction',
    tag: '25 puzzles',
    accentVar: '--logic-color',
    glowVar: '--logic-glow',
    data: logic,
  },
];

export function getQuestionsForSession(subjectId, difficulty, count = 10) {
  const subject = SUBJECTS.find(s => s.id === subjectId);
  if (!subject) return [];
  const pool = subject.data.filter(q => q.difficulty === difficulty);
  // Shuffle
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
