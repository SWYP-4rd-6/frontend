import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home-page';
import Error from './pages/error-page';
import { Login, EmailLogin } from './pages/login-page';
import TourDetail from './pages/tour-detail-page';
import App from './App';
import SignUp from './pages/signup-page';
import HomeMore from './pages/home-more-page';
import HostDetail from './pages/host-detail-page';
import Register from './pages/register-page';
import ReservationDetail from './pages/reservation-detail-page';
import ReservationComplete from './pages/reservation-complete-page';
import ReservationPay from './pages/reservation-pay-page';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />, // 404 에러시 보여지는 컴포넌트 입니다.
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'login/email', element: <EmailLogin /> },
      { path: 'tour/detail', element: <TourDetail /> },
      { path: 'signup', element: <SignUp /> },
      // 임시
      { path: 'tour/detail', element: <TourDetail /> },
      { path: 'more', element: <HomeMore /> },
      { path: 'tour/reservation/payment', element: <ReservationPay /> },
      { path: 'host/detail', element: <HostDetail /> },
      { path: 'tour/register', element: <Register /> },
      { path: 'tour/reservation', element: <ReservationDetail /> },
      { path: 'tour/reservation/complete', element: <ReservationComplete /> },
      {
        path: '/',
        element: <ProtectedRoute />,
        children: [
          { path: 'tour/detail', element: <TourDetail /> },
          { path: 'more', element: <HomeMore /> },
          { path: 'tour/reservation/payment', element: <ReservationPay /> },
          { path: 'host/detail', element: <HostDetail /> },
          { path: 'tour/register', element: <Register /> },
          { path: 'tour/reservation', element: <ReservationDetail /> },
          { path: 'tour/reservation/complete', element: <ReservationComplete /> },
        ],
      },
    ],
  },
]);

export default router;
