import React from 'react';
import Home from './Home/Home.js'
import Nav from './Nav/Nav.js'
import Chatbot from './Chatbot/Chatbot.js'
import './App.css';

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <Chatbot/>
    </div>
  );
}

export default App;
