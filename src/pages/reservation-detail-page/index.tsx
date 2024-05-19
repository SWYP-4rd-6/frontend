import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ReservationDetailView from './reservation-detail-page';
import axios from 'axios';
import moment, { Moment } from 'moment';
import { ReservationType } from '@/types/common';

function ReservationDetail() {
  const [reserveContent, seReserveContent] = useState<ReservationType>();
  const [content, setContent] = useState<string>('');

  const [startDate, setStartDate] = useState<Moment | null>(moment());
  const [endDate, setEndDate] = useState<Moment | null>(moment());
  const [startTime, setStartTime] = useState<string | null>();
  const [endTime, setEndTime] = useState<string | null>();

  const navigateTo = useNavigate();
  const pageLocation = useLocation();
  const pId = new URLSearchParams(pageLocation.search).get('id');
  const MAX_LENGTH = 500;

  const onClickPayment = () => {
    navigateTo('/tour/reservation/Payment');
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
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/v1/reservation/client/save`,
        {
          productId: pId,
          guideStart: startDate,
          guideEnd: endDate,
          personnel: 1,
          message: content,
          //  price: 10000,
        },
      );
      if (response.status === 200) {
        console.log('success');

        return true;
      }
      console.log('fail');
      return false;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    // getReservationDetail();
  }, []);

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
