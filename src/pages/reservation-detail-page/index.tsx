import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ReservationDetailView from './reservation-detail-page';
import moment, { Moment } from 'moment';
import { ReservationType } from '@/types/common';
import { api } from '@/api/axios';

function ReservationDetail() {
  const [reserveContent, seReserveContent] = useState<ReservationType>();
  const [content, setContent] = useState<string>('');
  const [startDate, setStartDate] = useState<Moment | null>(moment());
  const [endDate, setEndDate] = useState<Moment | null>(moment());
  const [startTime, setStartTime] = useState<string | null>();
  const [endTime, setEndTime] = useState<string | null>();

  const navigateTo = useNavigate();
  const pageLocation = useLocation();
  const MAX_LENGTH = 500;
  const location = useLocation();
  const { id, guideStart, guideEnd, price, guideTime } = location.state;

  const onClickPayment = () => {
    postReservationSave();
  };

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length > MAX_LENGTH) {
      return;
    }
    setContent(inputValue);
  };

  const handleDatesChange = ({
    startDate,
    endDate,
  }: {
    startDate: Moment | null;
    endDate: Moment | null;
  }) => {
    if (startDate && endDate) {
      console.log(startDate + ' ' + endDate);
      if (endDate.isBefore(startDate, 'day')) {
        // 종료 날짜가 시작 날짜보다 이전인 경우 종료 날짜로 둘 다 설정
        setStartDate(endDate);
        setEndDate(endDate);
      } else {
        // 그 외의 경우는 날짜 그대로 설정
        setStartDate(startDate);
        setEndDate(endDate);
      }
    } else if (startDate) {
      setStartDate(startDate);
      setEndDate(startDate);
    } else if (endDate) {
      setEndDate(endDate);
      setStartDate(endDate);
    }
  };

  const handleTimeChange = ({
    startTime,
    endTime,
  }: {
    startTime?: string | null;
    endTime?: string | null;
  }) => {
    startTime && setStartTime(startTime);
    endTime && setEndTime(endTime);
  };

  const postReservationSave = async () => {
    try {
      const guideStart = startDate && startDate.format('YYYY-MM-DD HH:mm:ss');
      const guideEnd = endDate && endDate.format('YYYY-MM-DD HH:mm:ss');
      const response = await api.post(`/v1/reservation/client/save`, {
        productId: id,
        guideStart,
        guideEnd,
        personnel: 1,
        message: content,
        price,
      });

      if (response.status === 200) {
        //console.log(response.data);
        navigateTo('/tour/reservation/Payment', {
          state: {
            productId: id,
            muid: 1,
            price,
            message: content,
            guideStart,
            guideEnd,
          },
        });
        return true;
      }
      console.log('fail');
      return false;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {}, []);

  return (
    <ReservationDetailView
      handleDatesChange={handleDatesChange}
      handleTimeChange={handleTimeChange}
      startDate={moment(startDate)}
      endDate={moment(endDate)}
      content={content}
      onChangeText={onChangeText}
      onClickPayment={onClickPayment}
    />
  );
}
export default ReservationDetail;
