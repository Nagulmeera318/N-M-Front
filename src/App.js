// src/App.js
import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Home from './components/Home';
import Content from './components/Content';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <div className="Content">
        {/* <Home /> */}
      </div>
      <footer className="Footer">
        <Contact />
      </footer>
    </div>
  );
}

export default App;
