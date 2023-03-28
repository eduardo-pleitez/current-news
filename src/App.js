import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Comments from './pages/Comments';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/comments' element={<Comments />} />
    </Routes>
  );
}

export default App;
