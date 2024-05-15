import React, { useState, useEffect, useRef } from 'react';

interface TimePicker {
  value: string;
  text: string;
  lastChild?: boolean;
  onChange: (value: string) => void;
}

const TimePicker: React.FC<TimePicker> = ({ value, onChange, text, lastChild }) => {
  const [hours, setHours] = useState<number>(parseInt(value.split(':')[0], 10));
  const [minutes, setMinutes] = useState<number>(parseInt(value.split(':')[1], 10));
  const hourIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const minuteIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const timePickerRef = useRef<HTMLDivElement>(null);

  const handleHourIncrement = () => {
    setHours((prevHours) => (prevHours === 23 ? 0 : prevHours + 1));
  };
  const handleHourDecrement = () => {
    setHours((prevHours) => (prevHours === 0 ? 23 : prevHours - 1));
  };

  const handleMinuteIncrement = () => {
    setMinutes((prevMinutes) => (prevMinutes === 59 ? 0 : prevMinutes + 1));
  };

  const handleMinuteDecrement = () => {
    setMinutes((prevMinutes) => (prevMinutes === 0 ? 59 : prevMinutes - 1));
  };

  const startHourIncrement = () => {
    setHours((prevHours) => (prevHours === 23 ? 0 : prevHours + 1));
    hourIntervalRef.current = setInterval(handleHourIncrement, 200);
  };

  const stopHourIncrement = () => {
    clearInterval(hourIntervalRef.current as NodeJS.Timeout);
  };

  const startHourDecrement = () => {
    setHours((prevHours) => (prevHours === 0 ? 23 : prevHours - 1));

    hourIntervalRef.current = setInterval(handleHourDecrement, 200);
  };

  const stopHourDecrement = () => {
    clearInterval(hourIntervalRef.current as NodeJS.Timeout);
  };

  const startMinuteIncrement = () => {
    setMinutes((prevMinutes) => (prevMinutes === 59 ? 0 : prevMinutes + 1));

    minuteIntervalRef.current = setInterval(handleMinuteIncrement, 200);
  };

  const stopMinuteIncrement = () => {
    clearInterval(minuteIntervalRef.current as NodeJS.Timeout);
  };

  const startMinuteDecrement = () => {
    setMinutes((prevMinutes) => (prevMinutes === 0 ? 59 : prevMinutes - 1));

    minuteIntervalRef.current = setInterval(handleMinuteDecrement, 200);
  };

  const stopMinuteDecrement = () => {
    clearInterval(minuteIntervalRef.current as NodeJS.Timeout);
  };

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}`;

  useEffect(() => {
    onChange(formattedTime);
  }, [formattedTime, onChange]);

  useEffect(() => {
    const timePickerElement = timePickerRef.current;

    if (timePickerElement) {
      const handleTransitionEnd = () => {
        timePickerElement.classList.remove('transition-all', 'duration-300');
      };
      timePickerElement.addEventListener('transitionend', handleTransitionEnd);

      return () => {
        timePickerElement.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, []);

  return (
    <div className="relative mt-2.5 ">
      <button
        className={`flex items-center justify-between text-white  w-full  pb-3 
        ${lastChild ? '' : 'border-b border-signature'}
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-signature">{text}</span>
        <span className=" bg-signature p-1 ">{formattedTime}</span>
      </button>
      <div
        ref={timePickerRef}
        className={`flex items-center *:text-signature transition-all duration-300 border-signature ${
          isOpen
            ? 'opacity-100 translate-y-0 scale-y-full'
            : 'opacity-0 -translate-y-2 scale-y-0  hidden '
        }
        ${isOpen && lastChild ? 'border-t' : 'border-b '}
        
        `}
      >
        <div className="flex items-center mr-2">
          <button
            onMouseDown={startHourDecrement}
            onMouseUp={stopHourDecrement}
            onMouseLeave={stopHourDecrement}
            className="mr-2 p-1  rounded-md"
          >
            -
          </button>
          <span className="mr-2">{formatTime(hours)}</span>
          <button
            onMouseDown={startHourIncrement}
            onMouseUp={stopHourIncrement}
            onMouseLeave={stopHourIncrement}
            className="p-1 rounded-md"
          >
            +
          </button>
        </div>
        <span className="mx-2">:</span>
        <div className="flex items-center ml-2">
          <button
            onMouseDown={startMinuteDecrement}
            onMouseUp={stopMinuteDecrement}
            onMouseLeave={stopMinuteDecrement}
            className="mr-2 p-1  rounded-md"
          >
            -
          </button>
          <span className="mr-2">{formatTime(minutes)}</span>
          <button
            onMouseDown={startMinuteIncrement}
            onMouseUp={stopMinuteIncrement}
            onMouseLeave={stopMinuteIncrement}
            className="p-1  rounded-md"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default TimePicker;
