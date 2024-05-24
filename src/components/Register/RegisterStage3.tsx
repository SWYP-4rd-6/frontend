import { useEffect, useState } from 'react';
import { StagePropsType } from '@/pages/register-page/register-page';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import ArrowButton from '../Button/ArrowButton';
import Calendar from '@/components/Calendar/Calendar';
import { format } from 'date-fns';
import { useTourRegStore } from '@/store/RegisterStore';

const RegisterStage3 = ({ setStage, setStep }: StagePropsType) => {
  const [open, setIsOpen] = useState({
    calendar: true,
    startTime: false,
    endTime: false,
  });

  const [startHour, setStartHour] = useState(0);
  const [startMinute, setStartMinute] = useState(0);
  const [endHour, setEndHour] = useState(0);
  const [endMinute, setEndMinute] = useState(0);
  const [activate, setActivate] = useState(false);

  const { tour, changeState } = useTourRegStore();

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    if ((startHour !== 0 || startMinute !== 0) && (endHour !== 0 || endMinute !== 0)) {
      setStep(3);
      setActivate(true);
    } else {
      setStep(2);
      setActivate(false);
    }
  }, [startHour, startMinute, endHour, endMinute, setStep]);

  useEffect(() => {
    if (startDate && endDate) {
      const startDateTime = new Date(startDate);
      startDateTime.setHours(startHour, startMinute);

      const endDateTime = new Date(endDate);
      endDateTime.setHours(endHour, endMinute);

      const newGuideStart = format(startDateTime, 'yyyy-MM-dd HH:mm:ss');
      const newGuideEnd = format(endDateTime, 'yyyy-MM-dd HH:mm:ss');

      if (tour.guideStart !== newGuideStart) {
        changeState('guideStart', newGuideStart);
      }
      if (tour.guideEnd !== newGuideEnd) {
        changeState('guideEnd', newGuideEnd);
      }
    }
  }, [startDate, endDate, startHour, startMinute, endHour, endMinute, changeState, tour]);

  const toggleState = (name: 'calendar' | 'startTime' | 'endTime') => {
    setIsOpen((prev) => {
      const newState: { calendar: boolean; startTime: boolean; endTime: boolean } = {
        calendar: false,
        startTime: false,
        endTime: false,
      };
      newState[name] = !prev[name];
      return newState;
    });
  };

  const handleTimeChange = (type: 'start' | 'end', unit: 'hour' | 'minute', value: number) => {
    if (type === 'start') {
      if (unit === 'hour') {
        setStartHour((prev) => (prev + value + 24) % 24);
      } else {
        setStartMinute((prev) => (prev + value + 60) % 60);
      }
    } else {
      if (unit === 'hour') {
        setEndHour((prev) => (prev + value + 24) % 24);
      } else {
        setEndMinute((prev) => (prev + value + 60) % 60);
      }
    }
  };

  const handleDateRangeChange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div>
      <div className="reg-title-black mb-5">
        <div className="reg-title-blue">언제</div>
        <div>여행할까요?</div>
      </div>

      <div className="mb-5">
        {open.calendar ? (
          <Calendar onDateRangeChange={handleDateRangeChange} />
        ) : (
          <div
            onClick={() => toggleState('calendar')}
            className=" px-5 py-[0.75rem] border-2 border-signature"
          >
            <div className="text-sub-bu font-[300] text-base">
              <div>
                <span className="text-signature font-[900]">
                  {startDate && endDate ? (
                    `${format(startDate, 'yyyy년 M월 d일')} ~ ${format(endDate, 'yyyy년 M월 d일')}`
                  ) : (
                    '날짜를 선택해주세요'
                  )}
                </span>
                에
              </div>
              <div>이웃을 만나요.</div>
            </div>
          </div>
        )}
      </div>

      <div className="border-2 border-signature py-1 px-5">
        <div className="flex justify-between items-center py-4">
          <span className="text-signature font-[300]">시작 시간</span>
          <span
            onClick={() => toggleState('startTime')}
            className={`px-2 py-1 text-sub-bu font-[300] ${open.startTime && 'bg-signature text-white font-[700]'} transition`}
          >
            {String(startHour).padStart(2, '0')}:{String(startMinute).padStart(2, '0')}
          </span>
        </div>
        {!open.startTime ? (
          <div className="border-t-[1px] border-signature"></div>
        ) : (
          <div className="border-y-[1px] border-signature flex justify-center items-center gap-2">
            <div className="flex flex-col justify-center items-center">
              <div onClick={() => handleTimeChange('start', 'hour', 1)}>
                <MdOutlineKeyboardArrowUp size={24} className="text-sub-non" />
              </div>
              <input
                type="number"
                value={startHour}
                onChange={(e) => setStartHour(Number(e.target.value))}
                min="0"
                max="23"
                className="text-center text-3xl text-signature font-[700]"
              />
              <div onClick={() => handleTimeChange('start', 'hour', -1)}>
                <MdOutlineKeyboardArrowDown size={24} className="text-sub-non" />
              </div>
            </div>

            <div className="text-2xl text-signature font-[700]">:</div>

            <div className="flex flex-col justify-center items-center">
              <div onClick={() => handleTimeChange('start', 'minute', 1)}>
                <MdOutlineKeyboardArrowUp size={24} className="text-sub-non" />
              </div>
              <input
                type="number"
                value={startMinute}
                onChange={(e) => setStartMinute(Number(e.target.value))}
                min="0"
                max="59"
                className="text-center text-3xl text-signature font-[700]"
              />
              <div onClick={() => handleTimeChange('start', 'minute', -1)}>
                <MdOutlineKeyboardArrowDown size={24} className="text-sub-non" />
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center py-4">
          <span className="text-signature font-[300]">종료 시간</span>
          <span
            onClick={() => toggleState('endTime')}
            className={`px-2 py-1 text-sub-bu font-[300] ${open.endTime && 'bg-signature text-white font-[900]'} transition`}
          >
            {String(endHour).padStart(2, '0')}:{String(endMinute).padStart(2, '0')}
          </span>
        </div>
        {open.endTime && (
          <div className="flex justify-center items-center gap-2 pb-4">
            <div className="flex flex-col justify-center items-center">
              <div onClick={() => handleTimeChange('end', 'hour', 1)}>
                <MdOutlineKeyboardArrowUp size={24} className="text-sub-non" />
              </div>
              <input
                type="number"
                value={endHour}
                onChange={(e) => setEndHour(Number(e.target.value))}
                min="0"
                max="23"
                className="text-center text-3xl text-signature font-[700]"
              />
              <div onClick={() => handleTimeChange('end', 'hour', -1)}>
                <MdOutlineKeyboardArrowDown size={24} className="text-sub-non" />
              </div>
            </div>

            <div className="text-2xl text-signature font-[700]">:</div>

            <div className="flex flex-col justify-center items-center">
              <div onClick={() => handleTimeChange('end', 'minute', 1)}>
                <MdOutlineKeyboardArrowUp size={24} className="text-sub-non" />
              </div>
              <input
                type="number"
                value={endMinute}
                onChange={(e) => setEndMinute(Number(e.target.value))}
                min="0"
                max="59"
                className="text-center text-3xl text-signature font-[700]"
              />
              <div onClick={() => handleTimeChange('end', 'minute', -1)}>
                <MdOutlineKeyboardArrowDown size={24} className="text-sub-non" />
              </div>
            </div>
          </div>
        )}
      </div>

      <ArrowButton
        activate={activate}
        moveForward={() => setStage(4)}
        moveBack={() => setStage(2)}
      />
    </div>
  );
};

export default RegisterStage3;
