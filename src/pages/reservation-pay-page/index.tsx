import { useEffect, useState } from 'react';
import type { RequestPayParams, RequestPayResponse, PG, PaymentMethod } from '@/types/portone';
import { useNavigate, useLocation } from 'react-router-dom';
import ReservationPayView from './reservation-pay-page';
import axios from 'axios';
import { RESERVATION_DATA } from '@/constants/test';
import { api } from '@/api/axios';
import { convertDateFormat, getNowUnixTimestamp } from '@/utils';
import { ReservationType } from '@/types/common';

const ReservationPay = () => {
  const [content, setContent] = useState<ReservationType>(RESERVATION_DATA); //RESERVATION_DATA
  const navigateTo = useNavigate();
  const pageLocation = useLocation();
  const pId = new URLSearchParams(pageLocation.search).get('id');
  const location = useLocation();
  const { productId, guideStart, guideEnd, price, muid, message } = location.state;

  const onComplete = () => {
    navigateTo('/tour/reservation/complete');
  };

  //2
  const postReservationPaymentSave = async () => {
    try {
      const response = await api.post(`/v1/reservation/client/payment`, {
        productId,
        guideStart,
        guideEnd,
        personnel: 1,
        message,
        price: 500,
        merchantUid: muid,
        impUid: import.meta.env.VITE_PORTONE_IMP_KEY,
        paidAt: getNowUnixTimestamp(),
        imp_key: import.meta.env.VITE_IMP_KEY,
        imp_secret: import.meta.env.VITE_IMP_SECRET,
      });

      if (response?.status === 200) {
        setContent(response.data);
        console.log(response.data);
        // navigateTo('/tour/reservation/Payment', {
        //   state: {
        //     muid: 1,
        //   },
        // });

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
    //postReservationPaymentSave();
  }, []);

  return <ReservationPayView onComplete={onComplete} content={content} />;
};
export default ReservationPay;
