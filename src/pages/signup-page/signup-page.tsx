import ArrowButton from '@/components/Button/ArrowButton';
import Header from '@/components/Header/Header';
import SignupForm from '@/components/Form/SignupForm';
import { useActivateStore } from '@/store/ActivateStore';
import { useNavigate } from 'react-router-dom';
import SignupForm2 from '@/components/Form/SignupForm2';
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
        <SignupForm2 />
        {/* {signupStage === 1 ? <SignupForm /> : <SignupForm2 />} */}
        <ArrowButton activate={readyToNext} moveFunc={moveStep} />
      </div>
    </div>
  );
};

export default SignUpPageView;
