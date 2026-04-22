// Math puzzle bank — arithmetic, algebra, geometry
// Types: 'mcq' (multiple choice) | 'fill' (fill in number) | 'sequence' (what comes next)

export const math = [
  // --- EASY ---
  {
    id: 'm1', difficulty: 'easy', type: 'fill',
    question: 'What is 12 × 8?',
    answer: '96',
    hint: 'Try 12 × 8 = 12 × (4 + 4)',
  },
  {
    id: 'm2', difficulty: 'easy', type: 'mcq',
    question: 'Which of these is a prime number?',
    options: ['9', '15', '17', '21'],
    answer: '17',
    hint: 'A prime has exactly 2 factors: 1 and itself',
  },
  {
    id: 'm3', difficulty: 'easy', type: 'sequence',
    question: 'What comes next in the sequence?',
    sequence: [2, 4, 8, 16, '?'],
    answer: '32',
    hint: 'Each number is doubled',
  },
  {
    id: 'm4', difficulty: 'easy', type: 'fill',
    question: 'What is the value of 7²?',
    answer: '49',
    hint: '7 squared = 7 × 7',
  },
  {
    id: 'm5', difficulty: 'easy', type: 'mcq',
    question: 'A triangle has angles 60°, 80°, and ___?',
    options: ['30°', '40°', '50°', '60°'],
    answer: '40°',
    hint: 'All angles in a triangle add up to 180°',
  },
  {
    id: 'm6', difficulty: 'easy', type: 'fill',
    question: 'What is 25% of 200?',
    answer: '50',
    hint: '25% = 1/4',
  },
  {
    id: 'm7', difficulty: 'easy', type: 'sequence',
    question: 'What comes next?',
    sequence: [1, 1, 2, 3, 5, '?'],
    answer: '8',
    hint: 'Each number is the sum of the two before it (Fibonacci!)',
  },
  {
    id: 'm8', difficulty: 'easy', type: 'mcq',
    question: 'What is the area of a rectangle 5 cm × 4 cm?',
    options: ['18 cm²', '20 cm²', '22 cm²', '24 cm²'],
    answer: '20 cm²',
    hint: 'Area = length × width',
  },
  {
    id: 'm9', difficulty: 'easy', type: 'fill',
    question: 'Solve: x + 15 = 23. What is x?',
    answer: '8',
    hint: 'Subtract 15 from both sides',
  },
  {
    id: 'm10', difficulty: 'easy', type: 'mcq',
    question: 'How many faces does a cube have?',
    options: ['4', '5', '6', '8'],
    answer: '6',
    hint: 'Count the flat sides of a dice',
  },

  // --- MEDIUM ---
  {
    id: 'm11', difficulty: 'medium', type: 'fill',
    question: 'Solve: 3x + 7 = 22. What is x?',
    answer: '5',
    hint: 'Subtract 7 first, then divide by 3',
  },
  {
    id: 'm12', difficulty: 'medium', type: 'mcq',
    question: 'What is the LCM of 12 and 18?',
    options: ['24', '36', '6', '72'],
    answer: '36',
    hint: 'LCM = smallest number divisible by both',
  },
  {
    id: 'm13', difficulty: 'medium', type: 'sequence',
    question: 'What comes next?',
    sequence: [3, 6, 12, 24, '?'],
    answer: '48',
    hint: 'Each term is multiplied by 2',
  },
  {
    id: 'm14', difficulty: 'medium', type: 'fill',
    question: 'What is √144?',
    answer: '12',
    hint: '12 × 12 = ?',
  },
  {
    id: 'm15', difficulty: 'medium', type: 'mcq',
    question: 'What is the value of 2³ + 3²?',
    options: ['13', '17', '19', '25'],
    answer: '17',
    hint: '2³ = 8 and 3² = 9',
  },
  {
    id: 'm16', difficulty: 'medium', type: 'fill',
    question: 'A circle has radius 7. What is its area? (Use π ≈ 22/7)',
    answer: '154',
    hint: 'Area = πr²',
  },
  {
    id: 'm17', difficulty: 'medium', type: 'sequence',
    question: 'What comes next?',
    sequence: [100, 50, 25, 12.5, '?'],
    answer: '6.25',
    hint: 'Each term is halved',
  },
  {
    id: 'm18', difficulty: 'medium', type: 'mcq',
    question: 'What is 15% of 80?',
    options: ['10', '12', '15', '18'],
    answer: '12',
    hint: '15% = 10% + 5%',
  },
  {
    id: 'm19', difficulty: 'medium', type: 'fill',
    question: 'Solve: 2x² = 50. What is x? (positive answer)',
    answer: '5',
    hint: 'Divide by 2 first, then square root',
  },
  {
    id: 'm20', difficulty: 'medium', type: 'mcq',
    question: 'What is the perimeter of a regular hexagon with side 6 cm?',
    options: ['30 cm', '36 cm', '42 cm', '48 cm'],
    answer: '36 cm',
    hint: 'A hexagon has 6 equal sides',
  },

  // --- HARD ---
  {
    id: 'm21', difficulty: 'hard', type: 'fill',
    question: 'Solve: 5x − 3(x − 2) = 14. What is x?',
    answer: '4',
    hint: 'Expand the brackets first',
  },
  {
    id: 'm22', difficulty: 'hard', type: 'mcq',
    question: 'In a right triangle, if the two legs are 5 and 12, what is the hypotenuse?',
    options: ['13', '15', '17', '11'],
    answer: '13',
    hint: 'Use the Pythagorean theorem: a² + b² = c²',
  },
  {
    id: 'm23', difficulty: 'hard', type: 'sequence',
    question: 'What comes next?',
    sequence: [2, 3, 5, 7, 11, '?'],
    answer: '13',
    hint: 'These are all prime numbers',
  },
  {
    id: 'm24', difficulty: 'hard', type: 'fill',
    question: 'What is 3⁴?',
    answer: '81',
    hint: '3 × 3 × 3 × 3',
  },
  {
    id: 'm25', difficulty: 'hard', type: 'mcq',
    question: 'How many diagonals does a hexagon have?',
    options: ['6', '9', '12', '15'],
    answer: '9',
    hint: 'Formula: n(n-3)/2 where n = number of sides',
  },
];
