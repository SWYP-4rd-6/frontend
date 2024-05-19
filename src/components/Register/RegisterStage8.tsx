import { useTourRegStore } from '@/store/RegisterStore';
import { useQuery } from '@tanstack/react-query';
import { MaterialSymbol } from 'react-material-symbols';
import { useNavigate } from 'react-router-dom';

type PropsType = {
  userId: number;
};

const RegisterStage8 = ({ userId }: PropsType) => {
  const { tour } = useTourRegStore();
  const navigate = useNavigate();

  return (
    <div>
      <div className="reg-title-black">
        <span className="reg-title-blue">즐거운 여행</span>이 될 거에요!
      </div>

      <div className="reg-subtitle my-5">많은 여행자들이 당신의 여행을 기대하고 있어요.</div>

      <div className="w-full h-[33.5rem] border relative overflow-hidden">
        <img
          src={tour.thumb_local}
          alt="thumb"
          className="w-full h-full object-cover absolute inset-0"
        />

        <div className="absolute inset-0 bg-[#0173FA] bg-opacity-20"></div>

        <div className="absolute flex flex-col px-8 py-5 text-white">
          <div className="text-4xl font-[900] mb-2">한강 치맥파티</div>
          <div className="text-[0.813rem] font-[300] mb-6">#먹거리 #야외활동</div>

          <div className="text-xs font-[700] flex items-center mb-2 gap-2">
            <MaterialSymbol icon="location_on" fill size={24} color="#fff" />
            <span>Location</span>
          </div>
          <div className="text-base font-[900] mb-3">반포 한강공원</div>

          <div className="text-xs font-[700 flex items-center mb-2 gap-2">
            <MaterialSymbol icon="date_range" fill size={24} color="#fff" />
            <span>Date</span>
          </div>
          <div className="text-base font-[900] mb-3">2024.04.08 ~ 2024.08.10</div>

          <div className="text-xs font-[700] flex items-center mb-2 gap-2">
            <MaterialSymbol icon="schedule" fill size={24} color="#fff" />
            <span>Time</span>
          </div>
          <div className="text-base font-[900]">17:00 ~ 19:00</div>
        </div>
      </div>

      <button
        type="button"
        className={`absolute bottom-12 w-full h-12 px-[33px] flex  items-center text-white bg-signature`}
        onClick={() => {
          navigate(`/tour/detail?id=${userId}`);
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
