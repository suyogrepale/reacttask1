import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemeDisplay() {
  const theme = useContext(ThemeContext);

  return <p>Current Theme: {theme}</p>;
}

export default ThemeDisplay;
