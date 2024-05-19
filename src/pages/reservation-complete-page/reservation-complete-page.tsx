import ArrowButton from '@/components/Button/ArrowButton';
import TextArrowButton from '@/components/Button/TextArrowButton';
import Header from '@/components/Header/Header';
import Ticket from '@/components/Ticket';
import { ReservationType } from '@/types/common';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PropsType {
  content: ReservationType;
}
const ReservationCompleteView = ({ content }: PropsType) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
  };

  return (
    <div>
      <Header />
      <div className="px-6">
        <div className="title">예약 요청 완료!</div>
        <div className="">
          가이드가 일정을 확인하고 있어요. <br />
          예약을 확정하면 알려드릴게요!
        </div>

        <div className="">
          <Ticket src={content.product.thumb} content={content.product} />
        </div>

        <div className="mt-4"></div>
        <TextArrowButton activate={true} onClick={onClick} />
      </div>
    </div>
  );
};

export default ReservationCompleteView;
