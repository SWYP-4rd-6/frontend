import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home-page';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />, // 404 에러시 보여지는 컴포넌트 입니다.
    children: [
      // 여기에 경로를 추가해주세요.
      { index: true, element: <HomePage /> },
      { path: 'login', element: <Login /> },
    ],
  },
]);

export default router;
