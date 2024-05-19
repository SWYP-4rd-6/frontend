import { useEffect, useState } from 'react';
import type { RequestPayParams, RequestPayResponse, PG, PaymentMethod } from '@/types/portone';
import { useNavigate, useLocation } from 'react-router-dom';
import ReservationPayView from './reservation-pay-page';
import axios from 'axios';
import { RESERVATION_DATA } from '@/constants/test';

const ReservationPay = () => {
  const [content, setContent] = useState(RESERVATION_DATA);
  const navigateTo = useNavigate();
  const pageLocation = useLocation();
  const pId = new URLSearchParams(pageLocation.search).get('id');

  const onComplete = () => {
    navigateTo('/tour/reservation/complete');
  };

  const postReservationSave = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/v1/reservation/client/save`,
        {
          productId: pId,
          //guideStart: startDate,
          // guideEnd: endDate,
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

  useEffect(() => {}, []);

  return <ReservationPayView onComplete={onComplete} content={content} />;
};
export default ReservationPay;
