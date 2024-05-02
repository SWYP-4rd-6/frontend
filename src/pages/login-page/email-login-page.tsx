import { Link } from 'react-router-dom';
import LoginHeader from '@/components/LoginHeader';
import EmailLoginForm from '@/components/EmailLoginForm';

const EmailLoginPageView = () => {
  return (
    <div className="flex flex-col">
      <LoginHeader />
      <div className="flex flex-col items-center gap-[20px] mt-[136px]">
        <EmailLoginForm />
      </div>
      <div className='flex justify-evenly items-center mt-5 text-xs font-[300]'>
        <Link to='/signup'>회원가입</Link>
        <Link to='/findpw'>비밀번호 찾기</Link>
      </div>
    </div>
  );
};

export default EmailLoginPageView;
