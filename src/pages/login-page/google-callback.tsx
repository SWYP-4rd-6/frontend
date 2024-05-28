import axios from 'axios';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useLoginStore from '@/store/LoginStore';
import { jwtDecode } from 'jwt-decode';
import { useUserInfoStore } from '@/store/UserInfoStore';

const GoogleCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setIsLogin, setUserId } = useLoginStore();
  const { googleUser, changeGState } = useUserInfoStore();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');

    const googleLogin = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/v1/oauth2/callback`, {
          params: {
            code,
          },
        });

        if (res.status === 200) {
          const { accessToken, refreshToken } = res.data.token;
          const { id } = res.data.user;

          const decodedToken = jwtDecode(accessToken);
          const expirationTime = decodedToken.exp ? decodedToken.exp * 1000 : null;

          if (expirationTime) {
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('tokenExpiration', expirationTime.toString());
          }

          setIsLogin(true);
          setUserId(id);
          navigate('/');
        }
        console.log(res);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            if (error.response.status === 301) {
              const { name, picture, uuid } = error.response.data;
              changeGState('name', name);
              changeGState('uuid', uuid);
              navigate('/google/signup');
            } else {
              console.error('서버로부터의 오류 응답:', error.response.data);
            }
          }
        } else {
          console.error('알 수 없는 오류:', error);
        }
      }
    };

    googleLogin();
  }, [location, navigate, setIsLogin, setUserId]);

  return <div className='h-screen flex justify-center items-center'>정보요청 중입니다...</div>;
};

export default GoogleCallback;
