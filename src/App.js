import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      const userId = localStorage.getItem('userId') || Math.random().toString(36).substring(7);
      localStorage.setItem('userId', userId);

      const response = await axios.post('http://localhost:5000/click', { userId });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Kliknij mnie!</button>
      <p>{message}</p>
    </div>
  );
}

export default App;