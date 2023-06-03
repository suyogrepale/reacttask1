import React from 'react';

function Button() {
  // Event handler function for button click
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

export default Button;
