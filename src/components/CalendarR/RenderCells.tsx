import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  parseISO,
  startOfMonth,
  startOfWeek,
  subDays,
} from 'date-fns';
import uuid from 'react-uuid';

const RenderCells = ({
  currentMonth,
  startDate,
  endDate,
  onDateClick,
  initialDate,
}: {
  currentMonth: Date;
  startDate: Date | null;
  endDate: Date | null;
  onDateClick: (date: Date) => void;
  initialDate?: { guideStart: Date; guideEnd: Date };
}) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDateOfMonth = startOfWeek(monthStart);
  const endDateOfMonth = endOfWeek(monthEnd);

  const rows: React.ReactNode[] = [];
  let days: React.ReactNode[] = [];
  let day = startDateOfMonth;
  let formattedDate = '';
  const initialDateCheck = () => {
    if (!initialDate) {
      return false;
    }
    const guideStartDate = subDays(initialDate.guideStart, 1);
    const guideEndDate = initialDate.guideEnd;
    return !(day >= guideStartDate && day <= guideEndDate);
  };

  while (day <= endDateOfMonth) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      const cloneDay = day;
      const isStartDate = startDate && isSameDay(day, startDate);
      const isEndDate = endDate && isSameDay(day, endDate);
      const isInRange = startDate && endDate && day > startDate && day < endDate;
      days.push(
        <div
          className={`calendar-col cell ${
            !isSameMonth(day, monthStart)
              ? 'disabled'
              : initialDateCheck()
                ? 'limit'
                : isStartDate
                  ? 'start-date'
                  : isEndDate
                    ? 'end-date'
                    : isInRange
                      ? 'in-range'
                      : 'not-valid'
          }`}
          key={uuid()}
          onClick={() => onDateClick(cloneDay)}
        >
          <span className={!isSameMonth(day, monthStart) ? 'text not-valid' : ''}>
            {formattedDate}
          </span>
        </div>,
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="calendar-row" key={uuid()}>
        {days}
      </div>,
    );
    days = [];
  }
  return <div className="calendar-body">{rows}</div>;
};

export default RenderCells;
