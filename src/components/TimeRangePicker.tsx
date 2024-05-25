import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
interface PropsType {
  initialStartTime: string; // `2024-11-05 14:54:12` 형식의 초기 startTime
  initialEndTime: string; // `2024-11-05 14:54:12` 형식의 초기 endTime
  endActive: boolean;
  handleTimeRangeChange: ({
    startTime,
    endTime,
  }: {
    startTime?: string | null;
    endTime?: string | null;
  }) => void;
  lange: number;
}

const parseTime = (timeString: string) => {
  if (!timeString) {
    return { hour: 17, minute: 0 };
  }
  const date = new Date(timeString);
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
};

const TimeRangePicker = ({
  initialStartTime,
  initialEndTime,
  endActive,
  handleTimeRangeChange,
  lange,
}: PropsType) => {
  const initialStart = parseTime(initialStartTime);
  const initialEnd = parseTime(initialEndTime);
  const [open, setIsOpen] = useState({
    startTime: false,
    endTime: false,
  });
  const [startHour, setStartHour] = useState(initialStart.hour);
  const [startMinute, setStartMinute] = useState(initialStart.minute);
  const [endHour, setEndHour] = useState(initialEnd.hour);
  const [endMinute, setEndMinute] = useState(initialEnd.minute);

  const formatTime = (time: number) => time.toString().padStart(2, '0');
  const formattedStartTime = `${formatTime(startHour)}:${formatTime(startMinute)}`;
  const formattedEndTime = `${formatTime(endHour)}:${formatTime(endMinute)}`;

  const toggleState = (name: 'startTime' | 'endTime') => {
    setIsOpen((prev) => {
      const newState: { startTime: boolean; endTime: boolean } = {
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

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<number>>, min: number, max: number) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      if (!isNaN(value) && value >= min && value <= max) {
        setter(value);
      }
    };

  useEffect(() => {
    handleTimeRangeChange({ startTime: formattedStartTime, endTime: formattedEndTime });
  }, [formattedStartTime, formattedEndTime, handleTimeRangeChange]);

  useEffect(() => {
    if (lange) {
      const newEndHour = (startHour + Math.floor((startMinute + lange * 60) / 60)) % 24;
      const newEndMinute = (startMinute + lange * 60) % 60;
      setEndHour(newEndHour);
      setEndMinute(newEndMinute);
    }
  }, [startHour, startMinute]);

  return (
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
              onChange={handleInputChange(setStartHour, 0, 23)}
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
              onChange={handleInputChange(setStartMinute, 0, 59)}
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
      {endActive && open.endTime && (
        <div className="flex justify-center items-center gap-2 pb-4">
          <div className="flex flex-col justify-center items-center">
            <div onClick={() => handleTimeChange('end', 'hour', 1)}>
              <MdOutlineKeyboardArrowUp size={24} className="text-sub-non" />
            </div>
            <input
              type="number"
              value={endHour}
              onChange={handleInputChange(setEndHour, 0, 23)}
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
              onChange={handleInputChange(setEndMinute, 0, 59)}
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
  );
};
export default TimeRangePicker;
