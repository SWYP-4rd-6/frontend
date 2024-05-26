import React from 'react';

const RenderDays = () => {
  const days: React.ReactNode[] = [];
  const date = ['일', '월', '화', '수', '목', '금', '토'];
  for (let i = 0; i < 7; i++) {
    days.push(<div key={i} className='calendar-header-days'>{date[i]}</div>);
  }

  return <div className='calendar-header'>{days}</div>;
};

export default RenderDays;