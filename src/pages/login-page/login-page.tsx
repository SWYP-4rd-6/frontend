import { Link } from 'react-router-dom';
import LoginButton from '@/components/Button/LoginButton';
import LoginHeader from '@/components/Header/LoginHeader';
import axios from 'axios';

export const emailLogin = async (data: any) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/v1/auth/login`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      return res;
    } else if (res.status === 400) {
      console.log('로그인 실패');
    }
  } catch (error) {
    console.error('Signup failed:', error);
    return null;
  }
  return null;
};

const LoginPageView = () => {
  return (
    <div className="flex flex-col">
      <LoginHeader />
      <div className="flex flex-col items-center gap-[20px] mt-48 ">
        <LoginButton loginType="google" />
        <LoginButton loginType="email" />
        <Link to="/" className="font-extralight text-signature">
          로그인 하지 않고 둘러보기
        </Link>
      </div>
    </div>
  );
};

export default LoginPageView;
