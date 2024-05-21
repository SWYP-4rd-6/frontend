import { Navigate, Outlet } from 'react-router-dom';
import useAuthCheck from './utils/useAuthCheck';
import useLoginStore from './store/LoginStore';

const ProtectedRoute = () => {
  useAuthCheck();
  const { isLogin } = useLoginStore();
  
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
