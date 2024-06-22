import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ReservationDetailView from './reservation-detail-page';
import moment, { Moment } from 'moment';
import { ReservationType } from '@/types/common';
import { authAxiosInstance } from '@/apis/axios';
import { format, formatDate, isBefore } from 'date-fns';
import { formatDateString, formatDateString2, formatOnlyDate, formatStringDateKor } from '@/utils';

function ReservationDetail() {
  const location = useLocation();
  const { id, guideStart, guideEnd, price, guideTime, guideStartTime, guideEndTime, title } =
    location.state;
  const [message, setMessage] = useState<string>('');
  const [startDate, setStartDate] = useState<Date | null>(guideStart);
  const [endDate, setEndDate] = useState<Date | null>(guideEnd);
  const [open, setIsOpen] = useState({
    calendar: true,
  });
  const [selectedTime, setSelectedTime] = useState<string>('00:00');
  const navigateTo = useNavigate();
  const MAX_LENGTH = 500;

  const toggleState = (name: 'calendar') => {
    setIsOpen((prev) => {
      const newState: { calendar: boolean } = {
        calendar: false,
      };
      newState[name] = !prev[name];
      return newState;
    });
  };

  const onClickPayment = () => {
    postReservationSave();
  };

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length > MAX_LENGTH) {
      return;
    }
    setMessage(inputValue);
  };

  const handleDateRangeChange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
  };

  const handleTimeChange = (num: string) => {
    console.log(num);
    setSelectedTime(num);
  };
  const postReservationSave = async () => {
    const param = {
      productId: id,
      guideStart:
        formatOnlyDate(startDate === null ? endDate : startDate) + ' ' + selectedTime + ':00',
      guideEnd: formatOnlyDate(endDate === null ? startDate : endDate) + ' ' + guideEndTime,
      personnel: 1,
      message,
      price,
    };
    //  1.2024-05-27 00:00:00
    // 2.Tue May 28 2024 00:00:00 GMT+0900 (한국 표준시) 18:00:00

    console.log(param);
    try {
      // const guideStart = startDate && format(startDate, 'yyyy-MM-dd') + ' ' + startTime;
      //  const guideEnd = endDate && format(endDate, 'yyyy-MM-dd') + ' ' + endTime;
      const response = await authAxiosInstance.post(`/v1/reservation/client/save`, param);

      if (response.status === 200) {
        console.log(response.data);

        const routeParam = {
          state: {
            productId: id,
            startDate,
            endDate,
            guideStartTime: selectedTime,
            guideEndTime,
            price,
            message,
            personnel: 1,
            muid: response.data.merchantUid,
          },
        };
        navigateTo('/tour/reservation/Payment', routeParam);
        return true;
      }
      console.log('fail');
      return false;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <ReservationDetailView
      //handleTimeChange={handleTimeChange}
      startDate={startDate}
      endDate={endDate}
      toggleState={toggleState}
      message={message}
      onChangeText={onChangeText}
      onClickPayment={onClickPayment}
      handleDateRangeChange={handleDateRangeChange}
      open={open}
      guideStart={guideStart}
      guideEnd={guideEnd}
      guideStartTime={guideStartTime}
      guideEndTime={guideEndTime}
      guideTime={guideTime}
      title={title}
      selectedTime={selectedTime}
      handleTimeChange={handleTimeChange}
    />
  );
}
export default ReservationDetail;
