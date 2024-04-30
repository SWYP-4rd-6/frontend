import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import TourDetail from '@/pages/TourDetail';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/tour/detail" element={<TourDetail />} />
    </Routes>
  );
}

export default App;
