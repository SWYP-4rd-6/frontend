import { FcGoogle } from 'react-icons/fc';
import { useGoogleLogin } from '@react-oauth/google';
import { MaterialSymbol } from 'react-material-symbols';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface LoginButtonProps {
  loginType: 'email' | 'google';
};

const LoginButton = ({ loginType }: LoginButtonProps) => {
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

  return loginType === 'google' ? (
    <button
      type="button"
      className="flex justify-center items-center gap-1 bg-[#646464] w-[283px] h-[48px] text-white font-black text-[20px]"
      onClick={googleLogin}
    >
      <span className="flex justify-center">
        <FcGoogle />
      </span>
      <span>구글로 로그인 하기</span>
    </button>
  ) : (
    <Link
      to="/login/email"
      className="flex justify-center items-center gap-1 bg-[#646464] w-[283px] h-[48px] text-white font-black text-[20px]"
    >
      <span className="flex justify-center">
       <MaterialSymbol icon='mail' fill size={22}/>
      </span>
      <span>이메일로 시작하기</span>
    </Link>
  );
};

export default LoginButton;
