import { Link } from 'react-router-dom';
import LoginButton from '@/components/LoginButton';
import LoginHeader from '@/components/LoginHeader';

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
