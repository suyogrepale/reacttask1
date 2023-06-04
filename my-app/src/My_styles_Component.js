import React from 'react';
import styles from './styles.module.css'; // Import the CSS module

const MyComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, CSS Modules!</h1>
      <p>This is a component styled with CSS Modules.</p>
    </div>
  );
};

export default MyComponent;
