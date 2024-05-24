import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ReservationDetailView from './reservation-detail-page';
import moment, { Moment } from 'moment';
import { ReservationType } from '@/types/common';
import { api } from '@/api/axios';
import { format, isBefore } from 'date-fns';

function ReservationDetail() {
  const [message, setMessage] = useState<string>('');
  //const [startDate, setStartDate] = useState<Moment | null>(moment());
  //const [endDate, setEndDate] = useState<Moment | null>(moment());
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [startTime, setStartTime] = useState<string | null>();
  const [endTime, setEndTime] = useState<string | null>();
  const [open, setIsOpen] = useState({
    calendar: true,
  });

  const navigateTo = useNavigate();
  const MAX_LENGTH = 500;
  const location = useLocation();
  const { id, guideStart, guideEnd, price, guideTime } = location.state;

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
    console.log(startDate + ' ' + endDate);

    if (startDate && endDate) {
      if (isBefore(endDate, startDate)) {
        // 종료 날짜가 시작 날짜보다 이전인 경우 종료 날짜로 둘 다 설정
        setStartDate(end);
        setEndDate(end);
      } else {
        // 그 외의 경우는 날짜 그대로 설정
        setStartDate(start);
        setEndDate(end);
      }
    }

    /*
        if (startDate && endDate) {
      if (endDate.isBefore(startDate, 'day')) {
        // 종료 날짜가 시작 날짜보다 이전인 경우 종료 날짜로 둘 다 설정
        setStartDate(end);
        setEndDate(end);
      } else {
        // 그 외의 경우는 날짜 그대로 설정
        setStartDate(start);
        setEndDate(end);
      }
    }
    
    else if (startDate) {
      setStartDate(start);
      setEndDate(start);
    } else if (end) {
      setEndDate(end);
      setStartDate(end);
    }
*/
    // setStartDate(start);
    //setEndDate(end);
  };
  /*
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


*/
  const handleTimeRangeChange = ({
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
    const param = {
      productId: id,
      guideStart,
      guideEnd,
      personnel: 1,
      message,
      price,
    };

    console.log(param);
    try {
      const guideStart = startDate && format(startDate, 'yyyy-MM-dd') + ' ' + startTime;
      const guideEnd = endDate && format(endDate, 'yyyy-MM-dd') + ' ' + endTime;

      //  const guideStart = startDate && startDate.format('YYYY-MM-DD') + ' ' + startTime;
      //  const guideEnd = endDate && endDate.format('YYYY-MM-DD') + ' ' + endTime;

      const response = await api.post(`/v1/reservation/client/save`, param);

      if (response.status === 200) {
        console.log(response.data);

        const param2 = {
          state: {
            productId: id,
            guideStart,
            guideEnd,
            price,
            message,
            personnel: 1,
            muid: response.data,
          },
        };
        navigateTo('/tour/reservation/Payment', param2);
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
      //   handleDatesChange={handleDatesChange}
      //  startDate={moment(startDate)}
      // endDate={moment(endDate)}
      //handleTimeChange={handleTimeChange}
      startDate={startDate}
      endDate={endDate}
      toggleState={toggleState}
      message={message}
      onChangeText={onChangeText}
      onClickPayment={onClickPayment}
      handleTimeRangeChange={handleTimeRangeChange}
      handleDateRangeChange={handleDateRangeChange}
      open={open}
      guideStart={guideStart}
      guideEnd={guideEnd}
      guideTime={guideTime}
    />
  );
}
export default ReservationDetail;
