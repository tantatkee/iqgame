import React, { useState } from 'react';
import Home from './components/Home';
import DifficultyPicker from './components/DifficultyPicker';
import Game from './components/Game';
import Results from './components/Results';
import { sounds } from './utils/sounds';

const SCREENS = {
  HOME: 'home',
  DIFFICULTY: 'difficulty',
  GAME: 'game',
  RESULTS: 'results'
};

export default function App() {
  const [screen, setScreen] = useState(SCREENS.HOME);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [lastResults, setLastResults] = useState(null);

  const navigateTo = (newScreen) => {
    sounds.click();
    setScreen(newScreen);
  };

  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
    navigateTo(SCREENS.DIFFICULTY);
  };

  const handleSelectDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
    navigateTo(SCREENS.GAME);
  };

  const handleFinishGame = (results) => {
    setLastResults(results);
    setScreen(SCREENS.RESULTS);
  };

  return (
    <div className="app-container">
      {screen === SCREENS.HOME && (
        <Home onSelectSubject={handleSelectSubject} />
      )}

      {screen === SCREENS.DIFFICULTY && (
        <DifficultyPicker
          subject={selectedSubject}
          onSelectDifficulty={handleSelectDifficulty}
          onBack={() => navigateTo(SCREENS.HOME)}
        />
      )}

      {screen === SCREENS.GAME && (
        <Game
          subject={selectedSubject}
          difficulty={selectedDifficulty}
          onFinish={handleFinishGame}
        />
      )}

      {screen === SCREENS.RESULTS && (
        <Results
          subject={selectedSubject}
          results={lastResults}
          onReplay={() => navigateTo(SCREENS.GAME)}
          onHome={() => navigateTo(SCREENS.HOME)}
        />
      )}
    </div>
  );
}
