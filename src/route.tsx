import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home-page';
import ErrorPage from './pages/error-page';
import LoginPage from './pages/login-page';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />, // 404 에러시 보여지는 컴포넌트 입니다.
    children: [
      // 여기에 경로를 추가해주세요.
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
]);

export default router;
