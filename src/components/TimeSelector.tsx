import React, { useState } from 'react';
import CategoryButton from './Button/CategoryButton';

interface TimeSelectorProps {
  startTime: number; // 시작 시간
  endTime: number; // 끝 시간
  selectedTime: string | null;
  handleTimeChange: (num: string) => void;
}

const TimeSelector = ({
  startTime = 0,
  endTime = 24,
  selectedTime,
  handleTimeChange,
}: TimeSelectorProps) => {
  const hours = Array.from({ length: endTime - startTime + 1 }, (_, i) => startTime + i);

  const handleTimeClick = (time: number) => {
    handleTimeChange(time.toString().padStart(2, '0') + ':00');
  };

  return (
    <div className="flex flex-wrap gird grid-cols-5 gap-y-[0.8rem] gap-x-[0.7rem]">
      {hours.map((hour) => {
        const timeString = hour.toString().padStart(2, '0') + ':00';
        const isSelected = selectedTime === timeString;

        return (
          <div className="*:text-base *:font-light " key={hour}>
            <CategoryButton
              text={timeString}
              active={isSelected}
              onClick={() => handleTimeClick(hour)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TimeSelector;
