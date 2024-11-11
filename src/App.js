import React, { useState } from 'react';
import './App.css';
import CounterCard from './Components/CounterCard';
import TimerCard from './Components/TimerCard';
import ThemeSwitcher from './Components/ThemeSwitcherCard';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme}`}>
      <header className={`App-header ${theme}`}>
        <h1>Assessment-1</h1>
      </header>
      <div className="card-container">
        <CounterCard theme={theme} />
        <TimerCard theme={theme} />
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default App;
