import { FcGoogle } from 'react-icons/fc';
import { useGoogleLogin } from '@react-oauth/google';
import { MaterialSymbol } from 'react-material-symbols';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

interface LoginButtonProps {
  loginType: 'email' | 'google';
}

const LoginButton = ({ loginType }: LoginButtonProps) => {
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => {
      console.log('codeResponse', codeResponse);
      const tokens = await axios.post('http://localhost:3001/auth/google', {
        code: codeResponse.code,
      });
      console.log(tokens);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  const emailLogin = () => {
    navigate(`/login/email`);
  };

  return (
    <button
      type="button"
      className="flex justify-center items-center gap-1 bg-[#646464] w-[283px] h-[48px] text-white font-black text-[20px]"
      onClick={loginType === 'google' ? googleLogin : emailLogin}
    >
      <span className="flex justify-center">
        {loginType === 'google' ? <FcGoogle /> : <MaterialSymbol icon="mail" fill size={22} />}
      </span>
      <span>{loginType === 'google' ? '구글로 로그인 하기' : '이메일로 시작하기'}</span>
    </button>
  );
};

export default LoginButton;
