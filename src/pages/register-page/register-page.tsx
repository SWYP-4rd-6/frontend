import { useState } from 'react';
import Header from '@/components/Header/Header';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import RegisterIntro from '@/components/Register/RegisterIntro';
import RegisterStage1 from '@/components/Register/RegisterStage1';
import RegisterStage2 from '@/components/Register/RegisterStage2';
import RegisterStage3 from '@/components/Register/RegisterStage3';
import RegisterStage4 from '@/components/Register/RegisterStage4';
import RegisterStage5 from '@/components/Register/RegisterStage5';
import RegisterStage6 from '@/components/Register/RegisterStage6';
import RegisterStage7 from '@/components/Register/RegisterStage7';
import RegisterStage8 from '@/components/Register/RegisterStage8';
import { useTourRegStore } from '@/store/RegisterStore';

export type StagePropsType = {
  setStage: React.Dispatch<React.SetStateAction<number>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const RegisterPageView = () => {
  const [stage, setStage] = useState(0);
  const [step, setStep] = useState(0);
  console.log(useTourRegStore.getState().tour);

  const renderStep = (step: number): JSX.Element | null => {
    switch (step) {
      case 0:
        return <RegisterIntro setStage={setStage} setStep={setStep} />;
      case 1:
        return <RegisterStage1 setStage={setStage} setStep={setStep} />;
      case 2:
        return <RegisterStage2 setStage={setStage} setStep={setStep} />;
      case 3:
        return <RegisterStage3 setStage={setStage} setStep={setStep} />;
      case 4:
        return <RegisterStage4 setStage={setStage} setStep={setStep} />;
      case 5:
        return <RegisterStage5 setStage={setStage} setStep={setStep} />;
      case 6:
        return <RegisterStage6 setStage={setStage} setStep={setStep} />;
      case 7:
        return <RegisterStage7 setStage={setStage} setStep={setStep} />;
      case 8:
        return <RegisterStage8 userId={1} />
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col overflow-y-scroll">
      <Header />
      <div className="mx-[25px] flex-grow relative">
        {stage !== 0 && <ProgressBar step={step} />}
        {renderStep(stage)}
      </div>
    </div>
  );
};

export default RegisterPageView;
