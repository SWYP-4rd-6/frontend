import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home-page';
import Error from './pages/error-page';
import { Login, EmailLogin } from './pages/login-page';
import TourDetail from './pages/tour-detail-page';
import App from './App';
import SignUp from './pages/signup-page';
import HomeMore from './pages/home-more-page';
import Pay from './pages/pay';
import HostDetail from './pages/host-detail-page';
import Register from './pages/register-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />, // 404 에러시 보여지는 컴포넌트 입니다.
    children: [
      // 여기에 경로를 추가해주세요.
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'login/email', element: <EmailLogin /> },
      { path: 'tour/detail', element: <TourDetail /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'tour/detail', element: <TourDetail /> },
      { path: 'more', element: <HomeMore /> },
      { path: 'pay', element: <Pay /> },
      { path: 'host/detail', element: <HostDetail /> },
      { path: 'tour/register', element: <Register /> },
    ],
  },
]);

export default router;
