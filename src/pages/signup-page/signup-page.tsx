import ArrowButton from '@/components/Button/ArrowButton';
import Header from '@/components/Header/Header';
import SignupForm from '@/components/Form/SignupForm';
import { useActivateStore } from '@/store/ActivateStore';
import { useNavigate } from 'react-router-dom';
//import SignupForm2 from '@/components/Form/SignupForm2';
import { useState } from 'react';

const SignUpPageView = () => {
  const navigate = useNavigate();
  const [signupStage, setSignupStage] = useState(1);
  const readyToNext = useActivateStore((state) => state.readyToNext);
  const moveStep = (type: string) => {
    if (signupStage === 1 && type === 'back') {
      navigate('/login/email');
    } else if (signupStage === 1 && type === 'forward') {
      setSignupStage(2);
    } else if (signupStage === 2 && type === 'back') {
      setSignupStage(1);
    } else if (signupStage === 2 && type === 'forward') {
      console.log('아직 안 정함');
    }
  };

  return (
    <div className="flex flex-col">
      <Header />
      <div className="mx-6">
        <div className="text-[#646464] font-[300] text-4xl flex flex-col gap-2 mb-6">
          <div>
            <span className="text-signature font-[900]">로그인</span>에 사용할
          </div>
          <div>
            <span className="text-signature font-[900]">아이디</span>와{' '}
            <span className="text-signature font-[900]">비밀번호</span>를
          </div>
          <div>입력해주세요.</div>
        </div>
        {/*signupStage === 1 ? <SignupForm /> : <SignupForm2 />*/}
        <ArrowButton activate={readyToNext} moveFunc={moveStep} />
      </div>
    </div>
  );
};

export default SignUpPageView;
