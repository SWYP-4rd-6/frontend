import React, { useState, useEffect, useRef } from 'react';
import { addMonths, format, subDays } from 'date-fns';
import RenderDays from './RenderDays';
import uuid from 'react-uuid';
import RenderHeader from './RenderHeader';
import RenderCells from './RenderCells';
import './calendar.css';

const CalendarR = ({
  onDateRangeChange,
  monthRange = 12,
  initialDate,
}: {
  onDateRangeChange: (start: Date | null, end: Date | null) => void;
  monthRange?: number;
  initialDate?: { guideStart: Date; guideEnd: Date };
}) => {
  const currentDate = new Date();
  const [startDate, setStartDate] = useState<Date | null>(
    initialDate ? initialDate.guideStart : null,
  );
  const [endDate, setEndDate] = useState<Date | null>(initialDate ? initialDate.guideEnd : null);
  const monthRef = useRef<HTMLDivElement>(null);

  let currentMonth = initialDate ? initialDate.guideStart : currentDate;
  const months: React.ReactNode[] = [];

  const handleDateClick = (date: Date) => {
    if (!initialDate) {
      return false;
    }
    const guideStartDate = subDays(initialDate.guideStart, 1);
    if (initialDate && !(date >= guideStartDate && date <= initialDate.guideEnd)) return;
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

  for (let i = 0; i < monthRange; i++) {
    months.push(
      <div
        key={uuid()}
        ref={format(currentMonth, 'MM') === format(currentDate, 'MM') ? monthRef : null}
        className="calendar-month"
      >
        <RenderHeader currentMonth={currentMonth} />
        <RenderCells
          currentMonth={currentMonth}
          startDate={startDate}
          endDate={endDate}
          initialDate={initialDate}
          onDateClick={handleDateClick}
        />
      </div>,
    );
    currentMonth = addMonths(currentMonth, 1);
  }

  useEffect(() => {
    if (monthRef.current !== null) {
      monthRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, []);

  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <RenderDays />
      </div>
      <div className="calendar-content  no-scroll-bar">{months}</div>
    </div>
  );
};

export default CalendarR;
