import { format } from 'date-fns';

const RenderHeader = ({ currentMonth }: { currentMonth: Date }) => {
  const monthYear = format(currentMonth, 'yyyy년 M월');
  return <div className='calendar-month-header'>{monthYear}</div>;
};
export default RenderHeader;
