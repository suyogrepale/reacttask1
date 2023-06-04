import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (username.trim() === '') {
      setError('Please enter a username');
      return;
    }

    if (password.trim() === '') {
      setError('Please enter a password');
      return;
    }

    // Perform processing logic (e.g., make API requests, update state, etc.)
    // ...

    // Reset form fields and error
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>

      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>

      {error && <div className="error">{error}</div>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
