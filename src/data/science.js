// Science puzzle bank — biology, chemistry, physics
// Types: 'mcq' (multiple choice) | 'fill' (short answer)

export const science = [
  // --- EASY ---
  {
    id: 's1', difficulty: 'easy', type: 'mcq',
    question: 'What is the chemical symbol for water?',
    options: ['HO', 'H₂O', 'H₂O₂', 'OH'],
    answer: 'H₂O',
    hint: 'It has 2 Hydrogen and 1 Oxygen atom',
  },
  {
    id: 's2', difficulty: 'easy', type: 'mcq',
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Jupiter', 'Mars', 'Saturn'],
    answer: 'Mars',
    hint: 'It has a red, dusty surface rich in iron oxide',
  },
  {
    id: 's3', difficulty: 'easy', type: 'fill',
    question: 'How many bones are in the adult human body?',
    answer: '206',
    hint: 'Babies are born with more, but some fuse together over time',
  },
  {
    id: 's4', difficulty: 'easy', type: 'mcq',
    question: 'What type of energy does a moving object have?',
    options: ['Potential energy', 'Chemical energy', 'Kinetic energy', 'Nuclear energy'],
    answer: 'Kinetic energy',
    hint: '"Kinetic" comes from the Greek word for motion',
  },
  {
    id: 's5', difficulty: 'easy', type: 'mcq',
    question: 'What is the process by which plants make their own food?',
    options: ['Respiration', 'Photosynthesis', 'Digestion', 'Transpiration'],
    answer: 'Photosynthesis',
    hint: '"Photo" = light; plants use sunlight to make food',
  },
  {
    id: 's6', difficulty: 'easy', type: 'fill',
    question: 'What is the atomic number of Carbon?',
    answer: '6',
    hint: 'Carbon has 6 protons in its nucleus',
  },
  {
    id: 's7', difficulty: 'easy', type: 'mcq',
    question: 'Which organ pumps blood around the human body?',
    options: ['Lungs', 'Liver', 'Brain', 'Heart'],
    answer: 'Heart',
    hint: 'It beats about 100,000 times a day',
  },
  {
    id: 's8', difficulty: 'easy', type: 'mcq',
    question: 'What state of matter has a definite shape and volume?',
    options: ['Gas', 'Liquid', 'Solid', 'Plasma'],
    answer: 'Solid',
    hint: 'Its particles are tightly packed and barely move',
  },
  {
    id: 's9', difficulty: 'easy', type: 'mcq',
    question: 'What force pulls objects toward the Earth?',
    options: ['Friction', 'Magnetism', 'Gravity', 'Tension'],
    answer: 'Gravity',
    hint: 'Newton discovered it when an apple fell from a tree',
  },
  {
    id: 's10', difficulty: 'easy', type: 'fill',
    question: 'Approximately how many chambers does the human heart have?',
    answer: '4',
    hint: 'Two upper (atria) and two lower (ventricles)',
  },

  // --- MEDIUM ---
  {
    id: 's11', difficulty: 'medium', type: 'mcq',
    question: 'What is the most abundant gas in Earth\'s atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
    answer: 'Nitrogen',
    hint: 'It makes up about 78% of the air we breathe',
  },
  {
    id: 's12', difficulty: 'medium', type: 'mcq',
    question: 'Which part of the cell contains the genetic material (DNA)?',
    options: ['Cell membrane', 'Cytoplasm', 'Nucleus', 'Mitochondria'],
    answer: 'Nucleus',
    hint: 'It\'s the "control center" of the cell',
  },
  {
    id: 's13', difficulty: 'medium', type: 'fill',
    question: 'What is the speed of light in a vacuum (in km/s)? Round to nearest thousand.',
    answer: '300000',
    hint: 'Approximately 3 × 10⁸ m/s',
  },
  {
    id: 's14', difficulty: 'medium', type: 'mcq',
    question: 'What type of bond holds water molecules together?',
    options: ['Ionic bond', 'Covalent bond', 'Hydrogen bond', 'Metallic bond'],
    answer: 'Hydrogen bond',
    hint: 'This weak bond is responsible for water\'s surface tension',
  },
  {
    id: 's15', difficulty: 'medium', type: 'mcq',
    question: 'What is Newton\'s 2nd Law of Motion?',
    options: [
      'Every action has an equal reaction',
      'Force = Mass × Acceleration',
      'Objects in motion stay in motion',
      'Energy cannot be created or destroyed'
    ],
    answer: 'Force = Mass × Acceleration',
    hint: 'F = ma',
  },
  {
    id: 's16', difficulty: 'medium', type: 'mcq',
    question: 'What is the powerhouse of the cell?',
    options: ['Ribosome', 'Golgi apparatus', 'Nucleus', 'Mitochondria'],
    answer: 'Mitochondria',
    hint: 'It produces ATP — the cell\'s energy currency',
  },
  {
    id: 's17', difficulty: 'medium', type: 'fill',
    question: 'What is the pH of pure water?',
    answer: '7',
    hint: 'It\'s perfectly neutral — neither acid nor base',
  },
  {
    id: 's18', difficulty: 'medium', type: 'mcq',
    question: 'Which element is a liquid at room temperature (besides mercury)?',
    options: ['Bromine', 'Chlorine', 'Fluorine', 'Iodine'],
    answer: 'Bromine',
    hint: 'It\'s a reddish-brown liquid halogen',
  },
  {
    id: 's19', difficulty: 'medium', type: 'mcq',
    question: 'What wave type can travel through a vacuum?',
    options: ['Sound waves', 'Seismic waves', 'Electromagnetic waves', 'Mechanical waves'],
    answer: 'Electromagnetic waves',
    hint: 'Light from the sun reaches us through space',
  },
  {
    id: 's20', difficulty: 'medium', type: 'fill',
    question: 'What gas do plants absorb during photosynthesis?',
    answer: 'CO2',
    hint: 'Also called carbon dioxide — a greenhouse gas',
  },

  // --- HARD ---
  {
    id: 's21', difficulty: 'hard', type: 'mcq',
    question: 'Which scientist proposed the theory of evolution by natural selection?',
    options: ['Gregor Mendel', 'Louis Pasteur', 'Charles Darwin', 'Albert Einstein'],
    answer: 'Charles Darwin',
    hint: 'He published "On the Origin of Species" in 1859',
  },
  {
    id: 's22', difficulty: 'hard', type: 'fill',
    question: 'How many pairs of chromosomes does a typical human cell contain?',
    answer: '23',
    hint: '46 total = 23 pairs',
  },
  {
    id: 's23', difficulty: 'hard', type: 'mcq',
    question: 'What subatomic particle has no electrical charge?',
    options: ['Proton', 'Electron', 'Neutron', 'Positron'],
    answer: 'Neutron',
    hint: 'It\'s in the nucleus alongside protons, but neutral',
  },
  {
    id: 's24', difficulty: 'hard', type: 'mcq',
    question: 'What is Avogadro\'s number (approximately)?',
    options: ['6.02 × 10²³', '6.67 × 10⁻¹¹', '1.38 × 10⁻²³', '9.11 × 10⁻³¹'],
    answer: '6.02 × 10²³',
    hint: 'It defines how many particles are in one mole of a substance',
  },
  {
    id: 's25', difficulty: 'hard', type: 'mcq',
    question: 'Which law states that energy cannot be created or destroyed?',
    options: ['Ohm\'s Law', 'Boyle\'s Law', 'Newton\'s First Law', 'Law of Conservation of Energy'],
    answer: 'Law of Conservation of Energy',
    hint: 'It\'s also the First Law of Thermodynamics',
  },
];
