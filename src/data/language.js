// Language puzzle bank — vocabulary, word unscramble, definitions, synonyms
// Types: 'mcq' | 'unscramble' | 'fill'

export const language = [
  // --- EASY ---
  {
    id: 'l1', difficulty: 'easy', type: 'unscramble',
    question: 'Unscramble this word:',
    scrambled: 'NLEPCLI',
    answer: 'PENCIL',
    hint: 'You use it to write or draw',
  },
  {
    id: 'l2', difficulty: 'easy', type: 'mcq',
    question: 'What is the synonym of "happy"?',
    options: ['Sad', 'Joyful', 'Angry', 'Tired'],
    answer: 'Joyful',
    hint: 'It means feeling great pleasure or delight',
  },
  {
    id: 'l3', difficulty: 'easy', type: 'unscramble',
    question: 'Unscramble this word:',
    scrambled: 'PYHAP',
    answer: 'HAPPY',
    hint: 'Opposite of sad',
  },
  {
    id: 'l4', difficulty: 'easy', type: 'mcq',
    question: 'Which word is an antonym of "ancient"?',
    options: ['Old', 'Modern', 'Historical', 'Traditional'],
    answer: 'Modern',
    hint: 'Antonym means the opposite',
  },
  {
    id: 'l5', difficulty: 'easy', type: 'mcq',
    question: 'Which of these is a noun?',
    options: ['Run', 'Quick', 'Cat', 'Slowly'],
    answer: 'Cat',
    hint: 'A noun is a person, place, or thing',
  },
  {
    id: 'l6', difficulty: 'easy', type: 'unscramble',
    question: 'Unscramble this word:',
    scrambled: 'IRDBN',
    answer: 'BRAIN',
    hint: 'The organ you\'re training right now!',
  },
  {
    id: 'l7', difficulty: 'easy', type: 'mcq',
    question: 'What does "enormous" mean?',
    options: ['Very small', 'Very fast', 'Very large', 'Very quiet'],
    answer: 'Very large',
    hint: 'Think: enormous elephant',
  },
  {
    id: 'l8', difficulty: 'easy', type: 'mcq',
    question: 'Which sentence is grammatically correct?',
    options: [
      'She don\'t like apples.',
      'She doesn\'t likes apples.',
      'She doesn\'t like apples.',
      'She not like apples.'
    ],
    answer: 'She doesn\'t like apples.',
    hint: 'Use "doesn\'t" (not "don\'t") with "she"',
  },
  {
    id: 'l9', difficulty: 'easy', type: 'unscramble',
    question: 'Unscramble this word:',
    scrambled: 'TOLBTE',
    answer: 'BOTTLE',
    hint: 'A container for liquids',
  },
  {
    id: 'l10', difficulty: 'easy', type: 'mcq',
    question: 'What is the plural of "leaf"?',
    options: ['Leafs', 'Leaves', 'Leeves', 'Leafes'],
    answer: 'Leaves',
    hint: 'Words ending in -f often change to -ves in plural',
  },

  // --- MEDIUM ---
  {
    id: 'l11', difficulty: 'medium', type: 'mcq',
    question: 'What does "ephemeral" mean?',
    options: ['Eternal', 'Short-lived', 'Mysterious', 'Enormous'],
    answer: 'Short-lived',
    hint: 'Ephemeral beauty fades quickly',
  },
  {
    id: 'l12', difficulty: 'medium', type: 'unscramble',
    question: 'Unscramble this word:',
    scrambled: 'LPUZER',
    answer: 'PUZZLE',
    hint: 'What you\'re playing right now!',
  },
  {
    id: 'l13', difficulty: 'medium', type: 'mcq',
    question: 'Which word correctly completes: "Neither the students nor the teacher ___ happy."',
    options: ['were', 'are', 'was', 'is'],
    answer: 'was',
    hint: 'When "neither/nor" links subjects, the verb agrees with the nearest subject',
  },
  {
    id: 'l14', difficulty: 'medium', type: 'mcq',
    question: 'What is the correct meaning of "ubiquitous"?',
    options: ['Rare and precious', 'Extremely fast', 'Found everywhere', 'Difficult to understand'],
    answer: 'Found everywhere',
    hint: 'Smartphones are ubiquitous in modern life',
  },
  {
    id: 'l15', difficulty: 'medium', type: 'unscramble',
    question: 'Unscramble this word:',
    scrambled: 'OINDAMNT',
    answer: 'DOMINANT',
    hint: 'Having power or influence over others',
  },
  {
    id: 'l16', difficulty: 'medium', type: 'mcq',
    question: 'What figure of speech is "The wind whispered through the trees"?',
    options: ['Metaphor', 'Simile', 'Personification', 'Alliteration'],
    answer: 'Personification',
    hint: 'Wind cannot actually whisper — it\'s given human qualities',
  },
  {
    id: 'l17', difficulty: 'medium', type: 'mcq',
    question: 'Choose the correct word: "The effect/affect of the medicine was immediate."',
    options: ['affect', 'effect'],
    answer: 'effect',
    hint: '"Effect" is usually a noun; "affect" is usually a verb',
  },
  {
    id: 'l18', difficulty: 'medium', type: 'unscramble',
    question: 'Unscramble this word:',
    scrambled: 'GLAENUEL',
    answer: 'LANGUAGE',
    hint: 'The subject you\'re playing right now',
  },
  {
    id: 'l19', difficulty: 'medium', type: 'mcq',
    question: 'What is an oxymoron?',
    options: [
      'A word that sounds like what it means',
      'A comparison using "like" or "as"',
      'Two contradictory words together',
      'Repeating the same consonant sound'
    ],
    answer: 'Two contradictory words together',
    hint: '"Deafening silence" is a famous example',
  },
  {
    id: 'l20', difficulty: 'medium', type: 'mcq',
    question: 'What is the synonym of "verbose"?',
    options: ['Silent', 'Brief', 'Wordy', 'Rude'],
    answer: 'Wordy',
    hint: 'A verbose speaker uses many more words than necessary',
  },

  // --- HARD ---
  {
    id: 'l21', difficulty: 'hard', type: 'mcq',
    question: 'What does "sycophantic" mean?',
    options: ['Overly creative', 'Excessively flattering', 'Deeply sarcastic', 'Musically talented'],
    answer: 'Excessively flattering',
    hint: 'A sycophant tells powerful people only what they want to hear',
  },
  {
    id: 'l22', difficulty: 'hard', type: 'unscramble',
    question: 'Unscramble this word:',
    scrambled: 'YBSTIMUA',
    answer: 'AMBIGUITY',
    hint: 'The quality of being open to more than one interpretation',
  },
  {
    id: 'l23', difficulty: 'hard', type: 'mcq',
    question: 'Which rhetorical device repeats a word or phrase at the end of successive clauses?',
    options: ['Anaphora', 'Epistrophe', 'Chiasmus', 'Assonance'],
    answer: 'Epistrophe',
    hint: '"...of the people, by the people, for the people" — repeating at the END',
  },
  {
    id: 'l24', difficulty: 'hard', type: 'mcq',
    question: 'What does "perspicacious" mean?',
    options: ['Easily confused', 'Having a ready insight', 'Overly talkative', 'Stubbornly persistent'],
    answer: 'Having a ready insight',
    hint: 'A perspicacious detective notices clues others miss',
  },
  {
    id: 'l25', difficulty: 'hard', type: 'unscramble',
    question: 'Unscramble this word:',
    scrambled: 'AITIMERN',
    answer: 'MARITIME',
    hint: 'Related to the sea or navigation',
  },
];
