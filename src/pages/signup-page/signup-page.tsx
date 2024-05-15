import Header from '@/components/Header/Header';
import SignupForm from '@/components/Form/SignupForm';
import SignupForm2 from '@/components/Form/SignupForm2';
import { useState } from 'react';

const SignUpPageView = () => {
  const [signupStage, setSignupStage] = useState(1);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="mx-6">
        {signupStage === 1 ? (
          <SignupForm setSignupStage={setSignupStage} />
        ) : (
          <SignupForm2 setSignupStage={setSignupStage} />
        )}
      </div>
    </div>
  );
};

export default SignUpPageView;
