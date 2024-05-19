import React, { useEffect, useState } from 'react';
import { useTourRegStore } from '@/store/RegisterStore';
import ArrowButton from '../Button/ArrowButton';
import { StagePropsType } from '@/pages/register-page/register-page';

const RegisterStage1 = ({ setStage, setStep }: StagePropsType) => {
  const { tour, changeState } = useTourRegStore();
  const [activate, setActivate] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    changeState(name as keyof Omit<typeof tour, 'images' | 'categories'>, value);
  };

  useEffect(() => {
    if (tour.name && tour.des) {
      setStep(1);
      setActivate(true);
    } else {
      setStep(0);
      setActivate(false);
    }
  }, [tour.name, tour.des]);

  return (
    <div>
      <div className="reg-title-black mb-5">
        <div>당신과 할</div>
        <div>
          <span className="reg-title-blue">여행의 이름</span>을
        </div>
        <div>지어주세요.</div>
      </div>
      <input
        type="text"
        name="name"
        value={tour.name}
        onChange={handleChange}
        placeholder="이름을 입력해주세요."
        maxLength={50}
        className="w-full h-9 border-2 border-signature text-signature font-[900] placeholder-normal caret-black focus:outline-none px-2 mb-2"
      />
      <div className="text-xs text-sub-bu font-[300] mb-9 min-h-[1rem]">
        {!tour.name ? '공백을 포함하여 50자 이내로 작성해주세요.' : ''}
      </div>

      <div className="reg-title-black mb-5">
        <div>
          <span className="reg-title-blue">여행</span>을
        </div>
        <div>자유롭게 설명해주세요.</div>
      </div>
      <textarea
        id="des"
        name="des"
        value={tour.des}
        onChange={handleChange}
        maxLength={500}
        placeholder="여행의 목적, 활동 등에 대하여 자유롭게 설명해주세요."
        className="w-full h-48 p-2 mb-2 text-base font-[300] border-2 border-signature placeholder-normal caret-black focus:outline-none resize-none"
      />
      <div className="text-xs text-sub-bu font-[300] min-h-[1rem]">
        {!tour.des ? '공백을 포함하여 500자 이내로 작성해주세요.' : ''}
      </div>
      <ArrowButton
        activate={activate}
        moveForward={() => setStage(2)}
        moveBack={() => setStage(0)}
      />
    </div>
  );
};

export default RegisterStage1;
