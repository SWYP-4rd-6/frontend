import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/home-page';
import TourDetail from '@/pages/tour-detail-page';

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
