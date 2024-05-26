import { useTourRegStore } from '@/store/RegisterStore';
import { StagePropsType } from '@/pages/register-page/register-page';
import { useEffect, useState } from 'react';
import ArrowButton from '../Button/ArrowButton';
import axios from 'axios';
import { registerTour } from '@/pages/register-page';

const RegisterStage7 = ({ setStage, setStep }: StagePropsType) => {
  const { tour, changeState } = useTourRegStore();
  const [activate, setActivate] = useState(false);
  const [price, setPrice] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // 새로운 상태 변수 추가

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

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value.endsWith('원')) {
      const valueWithoutWon = e.target.value.slice(0, -1).replace(/,/g, '');
      setPrice(valueWithoutWon);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value && !e.target.value.endsWith('원')) {
      const formattedValue = Number(e.target.value.replace(/[^0-9]/g, '')).toLocaleString();
      setPrice(`${formattedValue}원`);
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) return; // 이미 제출 중이면 함수 종료

    setIsSubmitting(true); // 제출 시작 시 상태 변경

    if (!tour.thumb) {
      alert("대표 이미지를 추가해야 합니다.");
      setIsSubmitting(false); // 제출 실패 시 상태 초기화
      return;
    }

    const formData = new FormData();

    const requestPayload = {
      locationName: tour.place,
      guideStart: tour.guideStart,
      price: tour.price,
      guideTime: tour.guideTime,
      latitude: tour.latitude,
      longitude: tour.longitude,
      title: tour.name,
      categories: tour.categories,
      description: tour.des,
      guideEnd: tour.guideEnd
    };

    formData.append('request', JSON.stringify(requestPayload));
    formData.append('thumb', tour.thumb);

    tour.images.forEach((file: File) => {
      if (file) {
        formData.append('file', file, file.name);
      }
    });

    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const res = await registerTour(formData);
      if (res) {
        console.log(res);
        changeState('postId', res.data.id);
        setStage(8);
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    } finally {
      setIsSubmitting(false); // 제출 완료 후 상태 초기화
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
        disabled={isSubmitting} // 제출 중일 때 입력 필드 비활성화
      />

      <ArrowButton activate={activate && !isSubmitting} moveForward={handleSubmit} moveBack={() => setStage(6)} />
    </div>
  );
};

export default RegisterStage7;
