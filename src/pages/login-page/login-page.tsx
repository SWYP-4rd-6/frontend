import { Link } from 'react-router-dom';
import LoginButton from '@/components/LoginButton';

const LoginPageView = () => (
  <div className="flex flex-col">
    <div className="flex flex-col items-center text-signature text-[36px] mt-44">
      <div className="font-extralight relative right-1">Nice to</div>
      <div className="font-extrabold relative bottom-3 flex">
        Mat
        <div className="border-b-[6px] border-signature w-[27px] relative bottom-[13px]" />
        <span className="relative right-[6px]">Thew</span>
      </div>
      <div className="border-b-2 border-t-2 h-[7px] border-signature w-[234px] relative bottom-3" />
    </div>
    <div className="flex flex-col items-center gap-[20px] mt-48 ">
      <LoginButton loginType="google" />
      <LoginButton loginType="email" />
      <Link to="/" className="font-extralight">
        로그인 하지 않고 둘러보기
      </Link>
    </div>
  </div>
);

export default LoginPageView;
