// src/App.js
import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Content">
        <Header />
      </div>
      <footer className="Footer">
        <Contact />
      </footer>
    </div>
  );
}

export default App;
