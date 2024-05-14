import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import LogoGitHub from './LogoGitHub';

function Navbar() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (isDarkMode) {
      rootElement.classList.add('dark-mode');
    } else {
      rootElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Portfolio de Lexi</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/documentation">Documentation</Link>
        </li>
        <li>
            <Link to="/projects">Projects</Link>
        </li>
        <li>
          <LogoGitHub /> {/* Intégrez le composant LogoGitHub ici */}
        </li>
        <li>
          <button onClick={toggleDarkMode}>{isDarkMode ? 'Mode Jour' : 'Mode Nuit'}</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
