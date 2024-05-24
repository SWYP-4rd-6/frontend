import React, { useState, useEffect, useRef } from 'react';
import { addMonths, format } from 'date-fns';
import RenderDays from './RenderDays';
import uuid from 'react-uuid';
import RenderHeader from './RenderHeader';
import RenderCells from './RenderCells';
import './calendar.css';

const Calendar = ({ onDateRangeChange }: { onDateRangeChange: (start: Date | null, end: Date | null) => void }) => {
  const currentDate = new Date();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const monthRef = useRef<HTMLDivElement>(null);

  let currentMonth = currentDate;
  const months: React.ReactNode[] = [];

  const handleDateClick = (date: Date) => {
    if (!startDate || (startDate && date < startDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (!endDate) {
      setEndDate(date);
      onDateRangeChange(startDate, date);
    } else {
      setStartDate(date);
      setEndDate(null);
      onDateRangeChange(date, null);
    }
  };

  for (let i = 0; i < 12; i++) {
    months.push(
      <div
        key={uuid()}
        ref={
          format(currentMonth, 'MM') === format(currentDate, 'MM')
            ? monthRef
            : null
        }
        className='calendar-month'
      >
        <RenderHeader currentMonth={currentMonth} />
        <RenderCells
          currentMonth={currentMonth}
          startDate={startDate}
          endDate={endDate}
          onDateClick={handleDateClick}
        />
      </div>
    );
    currentMonth = addMonths(currentMonth, 1);
  }

  useEffect(() => {
    if (monthRef.current !== null) {
      monthRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, []);

  return (
    <div className='calendar-wrapper'>
      <div className='calendar-header'>
        <RenderDays />
      </div>
      <div className='calendar-content'>{months}</div>
    </div>
  );
};

export default Calendar;