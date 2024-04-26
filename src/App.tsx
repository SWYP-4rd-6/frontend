import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
