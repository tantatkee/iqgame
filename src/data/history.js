// History puzzle bank — world history, events, figures

export const history = [
  // --- EASY ---
  {
    id: 'h1', difficulty: 'easy', type: 'mcq',
    question: 'Who was the first President of the United States?',
    options: ['Abraham Lincoln', 'Thomas Jefferson', 'George Washington', 'John Adams'],
    answer: 'George Washington',
    hint: 'His face is on the US $1 bill',
  },
  {
    id: 'h2', difficulty: 'easy', type: 'mcq',
    question: 'In what year did World War II end?',
    options: ['1943', '1944', '1945', '1946'],
    answer: '1945',
    hint: 'V-J Day and V-E Day both occurred this year',
  },
  {
    id: 'h3', difficulty: 'easy', type: 'mcq',
    question: 'Which ancient wonder of the world is still standing?',
    options: ['Colossus of Rhodes', 'Hanging Gardens of Babylon', 'Great Pyramid of Giza', 'Lighthouse of Alexandria'],
    answer: 'Great Pyramid of Giza',
    hint: 'It was built around 2560 BC in Egypt',
  },
  {
    id: 'h4', difficulty: 'easy', type: 'fill',
    question: 'In what year did Christopher Columbus first reach the Americas?',
    answer: '1492',
    hint: '"In 1492, Columbus sailed the ocean blue"',
  },
  {
    id: 'h5', difficulty: 'easy', type: 'mcq',
    question: 'Who invented the telephone?',
    options: ['Thomas Edison', 'Alexander Graham Bell', 'Nikola Tesla', 'Samuel Morse'],
    answer: 'Alexander Graham Bell',
    hint: 'He made the first phone call in 1876',
  },
  {
    id: 'h6', difficulty: 'easy', type: 'mcq',
    question: 'Where was the first atomic bomb dropped?',
    options: ['Tokyo', 'Nagasaki', 'Hiroshima', 'Osaka'],
    answer: 'Hiroshima',
    hint: 'It was dropped on August 6, 1945',
  },
  {
    id: 'h7', difficulty: 'easy', type: 'mcq',
    question: 'Who wrote "I Have a Dream"?',
    options: ['Malcolm X', 'Martin Luther King Jr.', 'Rosa Parks', 'Barack Obama'],
    answer: 'Martin Luther King Jr.',
    hint: 'He delivered this speech at the Lincoln Memorial in 1963',
  },
  {
    id: 'h8', difficulty: 'easy', type: 'fill',
    question: 'In what year did man first land on the Moon?',
    answer: '1969',
    hint: 'Apollo 11 mission; "One small step for man..."',
  },
  {
    id: 'h9', difficulty: 'easy', type: 'mcq',
    question: 'Which empire built the Colosseum in Rome?',
    options: ['Greek Empire', 'Ottoman Empire', 'Roman Empire', 'Byzantine Empire'],
    answer: 'Roman Empire',
    hint: 'It was completed around 80 AD',
  },
  {
    id: 'h10', difficulty: 'easy', type: 'mcq',
    question: 'Who was the Egyptian queen who had romances with Julius Caesar and Mark Antony?',
    options: ['Nefertiti', 'Hatshepsut', 'Cleopatra', 'Isis'],
    answer: 'Cleopatra',
    hint: 'She was the last pharaoh of ancient Egypt',
  },

  // --- MEDIUM ---
  {
    id: 'h11', difficulty: 'medium', type: 'mcq',
    question: 'What event triggered the start of World War I?',
    options: [
      'Invasion of Poland',
      'Assassination of Archduke Franz Ferdinand',
      'Sinking of the Lusitania',
      'The Treaty of Versailles'
    ],
    answer: 'Assassination of Archduke Franz Ferdinand',
    hint: 'It happened in Sarajevo in June 1914',
  },
  {
    id: 'h12', difficulty: 'medium', type: 'fill',
    question: 'In what year did the Berlin Wall fall?',
    answer: '1989',
    hint: 'It marked the beginning of German reunification',
  },
  {
    id: 'h13', difficulty: 'medium', type: 'mcq',
    question: 'Which country was the first to grant women the right to vote?',
    options: ['United States', 'United Kingdom', 'France', 'New Zealand'],
    answer: 'New Zealand',
    hint: 'This happened in 1893',
  },
  {
    id: 'h14', difficulty: 'medium', type: 'mcq',
    question: 'Which treaty ended World War I?',
    options: ['Treaty of Paris', 'Treaty of Westphalia', 'Treaty of Versailles', 'Treaty of Utrecht'],
    answer: 'Treaty of Versailles',
    hint: 'It was signed in 1919 at the Palace of Versailles, France',
  },
  {
    id: 'h15', difficulty: 'medium', type: 'fill',
    question: 'In what year did the French Revolution begin?',
    answer: '1789',
    hint: 'The storming of the Bastille was a pivotal moment',
  },
  {
    id: 'h16', difficulty: 'medium', type: 'mcq',
    question: 'Who was the leader of Nazi Germany during WWII?',
    options: ['Benito Mussolini', 'Joseph Stalin', 'Adolf Hitler', 'Heinrich Himmler'],
    answer: 'Adolf Hitler',
    hint: 'He became Germany\'s Chancellor in 1933',
  },
  {
    id: 'h17', difficulty: 'medium', type: 'mcq',
    question: 'Which civilization built Machu Picchu?',
    options: ['Aztec', 'Maya', 'Inca', 'Olmec'],
    answer: 'Inca',
    hint: 'It\'s located high in the Andes of Peru',
  },
  {
    id: 'h18', difficulty: 'medium', type: 'fill',
    question: 'In what year did India gain independence from Britain?',
    answer: '1947',
    hint: 'August 15 is now celebrated as India\'s Independence Day',
  },
  {
    id: 'h19', difficulty: 'medium', type: 'mcq',
    question: 'What ship sank on its maiden voyage in 1912?',
    options: ['Britannic', 'Olympic', 'Titanic', 'Lusitania'],
    answer: 'Titanic',
    hint: 'It struck an iceberg in the North Atlantic',
  },
  {
    id: 'h20', difficulty: 'medium', type: 'mcq',
    question: 'Who was the first woman to win a Nobel Prize?',
    options: ['Florence Nightingale', 'Marie Curie', 'Rosalind Franklin', 'Ada Lovelace'],
    answer: 'Marie Curie',
    hint: 'She won for Physics in 1903, then Chemistry in 1911',
  },

  // --- HARD ---
  {
    id: 'h21', difficulty: 'hard', type: 'mcq',
    question: 'Which battle in 1066 changed the course of English history?',
    options: ['Battle of Agincourt', 'Battle of Hastings', 'Battle of Bosworth', 'Battle of Crécy'],
    answer: 'Battle of Hastings',
    hint: 'William the Conqueror defeated King Harold II here',
  },
  {
    id: 'h22', difficulty: 'hard', type: 'fill',
    question: 'In what year did the Roman Empire fall (Western Roman Empire)?',
    answer: '476',
    hint: 'Romulus Augustulus was the last Western Roman Emperor',
  },
  {
    id: 'h23', difficulty: 'hard', type: 'mcq',
    question: 'Who sailed around the world first continuously without stopping?',
    options: ['Ferdinand Magellan', 'Francis Drake', 'Robin Knox-Johnston', 'Ernest Shackleton'],
    answer: 'Robin Knox-Johnston',
    hint: 'He completed it solo in 1969; Magellan started it but died mid-voyage',
  },
  {
    id: 'h24', difficulty: 'hard', type: 'mcq',
    question: 'What was the primary language of the Byzantine Empire?',
    options: ['Latin', 'Arabic', 'Greek', 'Ottoman Turkish'],
    answer: 'Greek',
    hint: 'Although descended from Rome, Greek became dominant by the 7th century',
  },
  {
    id: 'h25', difficulty: 'hard', type: 'fill',
    question: 'In what year did the US declare independence?',
    answer: '1776',
    hint: 'The Declaration of Independence was signed July 4',
  },
];
