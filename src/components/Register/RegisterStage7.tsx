import { useTourRegStore } from '@/store/RegisterStore';
import { StagePropsType } from '@/pages/register-page/register-page';
import { useEffect, useState } from 'react';
import ArrowButton from '../Button/ArrowButton';

const RegisterStage7 = ({ setStage, setStep }: StagePropsType) => {
  const { changeState } = useTourRegStore();
  const [activate, setActivate] = useState(false);
  const [price, setPrice] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, '');

    if (value) {
      const formattedValue = Number(value).toLocaleString();
      setStep(7);
      setPrice(`${formattedValue}`);
      changeState('price', Number(value));
      setActivate(true);
    } else {
      setStep(6);
      setPrice('');
      changeState('price', 0);
      setActivate(false);
    }
  };

  // 입력 필드에 포커스가 될 때 '원'을 제거
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value.endsWith('원')) {
      const valueWithoutWon = e.target.value.slice(0, -1).replace(/,/g, '');
      setPrice(valueWithoutWon);
    }
  };

  // 입력 필드에서 포커스가 벗어날 때 다시 '원'을 추가
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value && !e.target.value.endsWith('원')) {
      const formattedValue = Number(e.target.value.replace(/[^0-9]/g, '')).toLocaleString();
      setPrice(`${formattedValue}원`);
    }
  };

  return (
    <div>
      <div className="reg-title-black mb-5">
        <div>
          <span className="reg-title-blue">요금</span>을
        </div>
        <div>입력해주세요.</div>
      </div>

      <input
        type="text"
        name="price"
        value={price}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="요금을 입력해주세요."
        maxLength={50}
        className="w-full h-9 border-2 border-signature text-signature font-[900] placeholder-normal caret-black focus:outline-none px-2 mb-2"
      />

      <ArrowButton
        activate={activate}
        moveForward={() => {
          // 업로드
          setStage(8);
        }}
        moveBack={() => setStage(6)}
      />
    </div>
  );
};

export default RegisterStage7;
