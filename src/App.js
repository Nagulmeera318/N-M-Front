// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';
import Home from './components/Home';
import Content from './components/Content';
import Orders from './components/Orders'; // Import the Orders component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <footer className="Footer">
          <Contact />
        </footer>
      </div>
    </Router>
  );
}

export default App;
