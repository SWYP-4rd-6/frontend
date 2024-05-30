import React from 'react';
import { useTourRegStore } from '@/store/RegisterStore';
import { getTagNameKor } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { MaterialSymbol } from 'react-material-symbols';
import { useNavigate } from 'react-router-dom';

// Utility function to format dates and times
const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('ko-KR', options);
};

const formatTime = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleTimeString('ko-KR', options);
};

const RegisterStage8: React.FC = () => {
  const { tour } = useTourRegStore();
  const navigate = useNavigate();

  const thumbUrl = URL.createObjectURL(tour.thumb as File);

  return (
    <div>
      <div className="reg-title-black">
        <span className="reg-title-blue">즐거운 여행</span>이 될 거에요!
      </div>

      <div className="reg-subtitle my-5">많은 여행자들이 당신의 여행을 기대하고 있어요.</div>

      <div className="w-full h-[33.5rem] border relative overflow-hidden">
        <img
          src={thumbUrl}
          alt="thumb"
          className="w-full h-full object-cover absolute inset-0"
        />

        <div className="absolute inset-0 bg-[#0173FA] bg-opacity-20"></div>

        <div className="absolute flex flex-col px-8 py-5 text-white">
          <div className="text-4xl font-[900] mb-2">{tour.name}</div>
          <div className="text-[0.813rem] font-[300] mb-6 flex gap-2">
            {tour.categories.map((c, i) => (<span key={i}>#{getTagNameKor(c)}</span>))}
          </div>

          <div className="text-xs font-[700] flex items-center mb-2 gap-2">
            <MaterialSymbol icon="location_on" fill size={24} color="#fff" />
            <span>Location</span>
          </div>
          <div className="text-base font-[900] mb-3">{tour.place}</div>

          <div className="text-xs font-[700] flex items-center mb-2 gap-2">
            <MaterialSymbol icon="date_range" fill size={24} color="#fff" />
            <span>Date</span>
          </div>
          <div className="text-base font-[900] mb-3">{formatDate(tour.guideStart)} ~ {formatDate(tour.guideEnd)}</div>

          <div className="text-xs font-[700] flex items-center mb-2 gap-2">
            <MaterialSymbol icon="schedule" fill size={24} color="#fff" />
            <span>Time</span>
          </div>
          <div className="text-base font-[900]">{formatTime(tour.guideStart)} ~ {formatTime(tour.guideEnd)}</div>
        </div>
      </div>

      <button
        type="button"
        className="absolute bottom-12 w-full h-12 px-[33px] flex items-center text-white bg-signature"
        onClick={() => {
          navigate(`/tour/detail?id=${tour.postId}`);
        }}
      >
        <div className="flex items-center w-full">
          <span className="border-t-2 border-white flex-grow" />
          <span className="font-[700] text-xl ml-2">등록 완료</span>
        </div>
      </button>
    </div>
  );
};

export default RegisterStage8;
