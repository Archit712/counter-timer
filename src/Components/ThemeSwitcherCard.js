import React from 'react';
import './CardStyles.css';

function ThemeSwitcher({ theme, toggleTheme }) {
  return (
    <div className={`card ${theme}`}>
      <h4>Theme Switcher</h4>
      <button onClick={toggleTheme}>
        Change to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
