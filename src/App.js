import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // dodajemy import pliku CSS

function App() {
  const [message, setMessage] = useState('');
  const [buttonColor, setButtonColor] = useState('green'); // stan dla koloru przycisku

  const handleClick = async () => {
    try {
      const userId = localStorage.getItem('userId') || Math.random().toString(36).substring(7);
      localStorage.setItem('userId', userId);

      const response = await axios.post('https://anonymous-button-backend.onrender.com/click', { userId });
      setMessage(response.data.message);
      setButtonColor('red'); // zmiana koloru przycisku po kliknięciu
    } catch (error) {
      setMessage(error.response?.data?.message || 'Wystąpił błąd');
    }
  };

  return (
    <div className="App">
      <button
        onClick={handleClick}
        className={`animated-button ${buttonColor}`}
      >
        Kliknij mnie!
      </button>
      <p>{message}</p>
    </div>
  );
}

export default App;