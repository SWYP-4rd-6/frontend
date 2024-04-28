import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/home';
import './App.css';
import PayPage from '@/pages/pay';

function App() {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/pay" element={<PayPage />} />
    </Routes>
  );
}

export default App;
