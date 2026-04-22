// Logic puzzle bank — patterns, sequences, lateral thinking, deduction
// Types: 'mcq' | 'sequence' | 'fill'

export const logic = [
  // --- EASY ---
  {
    id: 'lo1', difficulty: 'easy', type: 'sequence',
    question: 'What comes next in the pattern?',
    sequence: [1, 4, 9, 16, '?'],
    answer: '25',
    hint: 'These are perfect squares: 1², 2², 3², ...',
  },
  {
    id: 'lo2', difficulty: 'easy', type: 'mcq',
    question: 'If all Blips are Blops, and all Blops are Blaps, then:',
    options: [
      'All Blaps are Blips',
      'All Blips are Blaps',
      'No Blips are Blaps',
      'Some Blaps are Blips'
    ],
    answer: 'All Blips are Blaps',
    hint: 'If A→B and B→C, then A→C (transitivity)',
  },
  {
    id: 'lo3', difficulty: 'easy', type: 'sequence',
    question: 'What comes next?',
    sequence: [5, 10, 15, 20, '?'],
    answer: '25',
    hint: 'Add 5 each time',
  },
  {
    id: 'lo4', difficulty: 'easy', type: 'mcq',
    question: 'A clock shows 3:00. What angle is between the hour and minute hands?',
    options: ['60°', '75°', '90°', '120°'],
    answer: '90°',
    hint: 'At 3:00, the minute hand points up, hour hand points right',
  },
  {
    id: 'lo5', difficulty: 'easy', type: 'fill',
    question: 'I have a head and a tail but no body. What am I?',
    answer: 'coin',
    hint: 'You flip me to make decisions',
  },
  {
    id: 'lo6', difficulty: 'easy', type: 'mcq',
    question: 'Which shape has the most lines of symmetry?',
    options: ['Rectangle', 'Square', 'Circle', 'Equilateral Triangle'],
    answer: 'Circle',
    hint: 'A circle has infinite lines of symmetry through its center',
  },
  {
    id: 'lo7', difficulty: 'easy', type: 'sequence',
    question: 'What letter comes next: A, C, E, G, ?',
    answer: 'I',
    hint: 'Every other letter of the alphabet',
  },
  {
    id: 'lo8', difficulty: 'easy', type: 'mcq',
    question: 'Tom is taller than Sam. Kate is taller than Tom. Who is the shortest?',
    options: ['Tom', 'Kate', 'Sam', 'Cannot tell'],
    answer: 'Sam',
    hint: 'Kate > Tom > Sam',
  },
  {
    id: 'lo9', difficulty: 'easy', type: 'fill',
    question: 'What has many keys but can\'t open any lock?',
    answer: 'piano',
    hint: 'It\'s a musical instrument',
  },
  {
    id: 'lo10', difficulty: 'easy', type: 'sequence',
    question: 'What comes next?',
    sequence: [2, 3, 5, 7, 11, '?'],
    answer: '13',
    hint: 'These are prime numbers',
  },

  // --- MEDIUM ---
  {
    id: 'lo11', difficulty: 'medium', type: 'sequence',
    question: 'What comes next?',
    sequence: [1, 3, 7, 15, 31, '?'],
    answer: '63',
    hint: 'Each term = previous × 2 + 1',
  },
  {
    id: 'lo12', difficulty: 'medium', type: 'mcq',
    question: 'A farmer has 17 sheep. All but 9 die. How many are left?',
    options: ['8', '9', '17', '0'],
    answer: '9',
    hint: '"All but 9" means 9 remain',
  },
  {
    id: 'lo13', difficulty: 'medium', type: 'fill',
    question: 'If 5 cats catch 5 mice in 5 minutes, how many cats does it take to catch 100 mice in 100 minutes?',
    answer: '5',
    hint: 'Each cat catches 1 mouse per 5 minutes. In 100 min each catches 20. 5 cats × 20 = 100',
  },
  {
    id: 'lo14', difficulty: 'medium', type: 'mcq',
    question: 'Which of these is always odd?',
    options: ['Sum of two even numbers', 'Product of two odd numbers', 'Sum of three even numbers', 'Product of an odd and even number'],
    answer: 'Product of two odd numbers',
    hint: 'odd × odd = odd; try 3 × 5 = 15',
  },
  {
    id: 'lo15', difficulty: 'medium', type: 'sequence',
    question: 'What number replaces the ?',
    sequence: [2, 6, 18, 54, '?'],
    answer: '162',
    hint: 'Multiply by 3 each time',
  },
  {
    id: 'lo16', difficulty: 'medium', type: 'mcq',
    question: 'You have two ropes. Each takes 60 minutes to burn, but unevenly. How can you measure 45 minutes?',
    options: [
      'Light one rope from one end, wait 15 min, light the second',
      'Light one rope from both ends, and the other from one end at the same time',
      'Cut the ropes in half',
      'It\'s impossible'
    ],
    answer: 'Light one rope from both ends, and the other from one end at the same time',
    hint: 'Burning from both ends halves the time to 30 min. Then light the other end of rope 2.',
  },
  {
    id: 'lo17', difficulty: 'medium', type: 'fill',
    question: 'I\'m light as a feather but even the strongest person can\'t hold me for more than 5 minutes. What am I?',
    answer: 'breath',
    hint: 'You do it automatically, but try holding it!',
  },
  {
    id: 'lo18', difficulty: 'medium', type: 'mcq',
    question: 'Which is the odd one out? 36, 49, 64, 81, 100, 110',
    options: ['100', '81', '64', '110'],
    answer: '110',
    hint: 'All others are perfect squares',
  },
  {
    id: 'lo19', difficulty: 'medium', type: 'sequence',
    question: 'Complete the analogy: 3 : 9 :: 5 : ?',
    answer: '25',
    hint: 'The second number is the square of the first',
  },
  {
    id: 'lo20', difficulty: 'medium', type: 'mcq',
    question: 'A snail climbs a 10 ft wall. Each day it climbs 3 ft, and each night slides back 2 ft. On which day does it reach the top?',
    options: ['7th', '8th', '9th', '10th'],
    answer: '8th',
    hint: 'Net 1 ft per day, but on the 8th morning it can reach the top before sliding back',
  },

  // --- HARD ---
  {
    id: 'lo21', difficulty: 'hard', type: 'mcq',
    question: 'What is the next number: 1, 11, 21, 1211, 111221, ?',
    options: ['312211', '312221', '1112221', '11112211'],
    answer: '312211',
    hint: 'Say out loud what you see: "one 1", "two 1s", "one 2, one 1"...',
  },
  {
    id: 'lo22', difficulty: 'hard', type: 'fill',
    question: 'How many squares (of all sizes) are in a standard 8×8 chessboard?',
    answer: '204',
    hint: 'Sum of squares: 8² + 7² + 6² + ... + 1²',
  },
  {
    id: 'lo23', difficulty: 'hard', type: 'mcq',
    question: 'If you have a 3-gallon jug and a 5-gallon jug, how do you measure exactly 4 gallons?',
    options: [
      'Fill 5, pour into 3, empty 3, pour remaining into 3, refill 5, fill up 3',
      'Fill 3 twice and pour into 5',
      'You can\'t with these jugs',
      'Fill 5 halfway'
    ],
    answer: 'Fill 5, pour into 3, empty 3, pour remaining into 3, refill 5, fill up 3',
    hint: 'After step one: 5 has 2 gallons. Pour that into empty 3. Refill 5. Top up the 3-jug (needs 1 more): leaves 4 in the 5.',
  },
  {
    id: 'lo24', difficulty: 'hard', type: 'sequence',
    question: 'What comes next?',
    sequence: [0, 1, 1, 2, 3, 5, 8, 13, '?'],
    answer: '21',
    hint: 'Fibonacci: add the two previous numbers',
  },
  {
    id: 'lo25', difficulty: 'hard', type: 'mcq',
    question: 'Mary\'s dad has 5 daughters: Nana, Nene, Nini, Nono, and ...?',
    options: ['Nunu', 'Nana', 'Nono', 'Mary'],
    answer: 'Mary',
    hint: 'Read the question carefully — who is Mary\'s dad\'s 5th daughter?',
  },
];
