import useLoginStore from '@/store/LoginStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


// 만료시간 확인하고 로그인 해제하는 hook
const useAuthCheck = () => {
  const { isLogin, setIsLogin } = useLoginStore();
  const navigate = useNavigate();

  useEffect(() => {
    const isTokenExpired = (): boolean => {
      const expirationTime = localStorage.getItem('tokenExpiration');
      if (!expirationTime) {
        return true;
      }
      const currentTime = new Date().getTime();
      return currentTime > parseInt(expirationTime, 10);
    };

    if (isTokenExpired() && isLogin) {
      alert('토큰이 만료되었습니다. 다시 로그인해 주세요.');
      setIsLogin(false);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('tokenExpiration');
      navigate('/login');
    }
  }, [isLogin, setIsLogin, navigate]);
};

export default useAuthCheck;
