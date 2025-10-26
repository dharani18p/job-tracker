
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import EditJob from './pages/EditJob';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>Job Application Tracker</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<EditJob />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;