import { StagePropsType } from '@/pages/register-page/register-page';
import { useTourRegStore } from '@/store/RegisterStore';
import { Timestamp } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import ArrowButton from '../Button/ArrowButton';

const RegisterStage4 = ({ setStage, setStep }: StagePropsType) => {
  const { tour, changeState } = useTourRegStore();
  const [activate, setActivate] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const options = [
    { label: '1시간 이내', value: 1 },
    { label: '2시간', value: 2 },
    { label: '3시간', value: 3 },
    { label: '4시간', value: 4 },
    { label: '6시간', value: 6 },
    { label: '반나절', value: 12 },
    { label: '하루 이상', value: 24 },
  ];

  useEffect(() => {
    // 전역상태값 존재시 초기값으로 유지
    if (tour.guideTime !== undefined && tour.guideTime !== null) {
      const index = options.findIndex((option) => option.value === tour.guideTime);
      if (index !== -1) {
        setSelected(index);
      }
    }
  }, [tour.guideTime]);

  const handleSelect = (i: number, time: number) => {
    setSelected(i);
    changeState('guideTime', time);
    setStep(4);
    setActivate(true);
  };

  return (
    <div>
      <div className="reg-title-black mb-6">
        <div>당신의</div>
        <div className="reg-title-blue">여행은 얼마나</div>
        <div>걸리나요?</div>
      </div>

      <div className="flex flex-wrap gap-7">
        {options.map((el, i) => {
          return (
            <div
              key={i}
              onClick={() => handleSelect(i, el.value)}
              className={`border-sub-non border-2 text-sub-bu font-[300] px-2.5 py-[0.063rem] ${selected === i && 'bg-signature font-[900] text-white border-2 border-transparent'}`}
            >
              {el.label}
            </div>
          );
        })}
      </div>

      <ArrowButton
        activate={activate}
        moveForward={() => setStage(5)}
        moveBack={() => setStage(3)}
      />
    </div>
  );
};

export default RegisterStage4;
