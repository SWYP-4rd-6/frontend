import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { enableMocking } from './mocks';

(async () => {
  if (process.env.NODE_ENV === 'development') {
    await enableMocking();
  }

  ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
})();
