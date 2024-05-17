import { useEffect, useState } from 'react';
import type { RequestPayParams, RequestPayResponse, PG, PaymentMethod } from '@/types/portone';
import { useNavigate, useLocation } from 'react-router-dom';
import ReservationPayView from './reservation-pay-page';
import axios from 'axios';
import { RESERVATION_DATA } from '@/constants/test';

const ReservationPay = () => {
  const [content, setContent] = useState(RESERVATION_DATA);
  const navigateTo = useNavigate();

  const onComplete = () => {
    navigateTo('/tour/reservation/complete');
  };

  const getReservationDetail = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/v1/`);
      if (response.status === 200) {
        console.log('success');
        setContent(response.data);

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

  return <ReservationPayView onComplete={onComplete} content={content} />;
};
export default ReservationPay;
