import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home-page';
import Error from './pages/error-page';
import Login from './pages/login-page';
import TourDetail from './pages/tour-detail-page';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />, // 404 에러시 보여지는 컴포넌트 입니다.
    children: [
      // 여기에 경로를 추가해주세요.
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'tour/detail', element: <TourDetail />}
    ],
  },
]);

export default router;
