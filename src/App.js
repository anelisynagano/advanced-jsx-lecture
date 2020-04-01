import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import SignIn from './SignIn';
import Title from './Title';

const messages = [];

function App() {

  const isAuthenticated = () => {
    const randomNumber = Math.random() * 10
    return randomNumber <= 5 ? true : false;
  }

  return (
    <div className="App">
      <Title redText />
      <Title />
      {
        isAuthenticated() ? <Welcome messages={messages} /> : <SignIn />
      }
    </div>
  );
}

export default App;
