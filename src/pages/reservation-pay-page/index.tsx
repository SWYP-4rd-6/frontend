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
  const [content, setContent] = useState<ReservationType>(); //RESERVATION_DATA
  const [isPaid, setIsPaid] = useState<boolean>(false);

  const navigateTo = useNavigate();
  const location = useLocation();
  const { productId, price, muid } = location.state;

  const onComplete = () => {
    navigateTo('/tour/reservation/complete');
  };

  //2.
  const getReservation = async () => {
    try {
      const response = await api.get(`${import.meta.env.VITE_BACKEND_URL}/v1/reservation/${muid}`);
      if (response.status === 200) {
        console.log(response);
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

  //4.
  const postReservationPaymentValidation = async () => {
    try {
      const response = await api.post(`/v1/reservation/client/payment/validation`, {
        imp_uid: '',
      });

      if (response?.status === 200) {
        setContent(response.data.product);
        console.log(response.data);
        postReservationPaymentSave();

        return true;
      }
      console.log('fail');
      return false;
    } catch (error) {
      //예약 취소하기
      console.error(error);
      throw error;
    }
  };

  //5.
  const postReservationPaymentSave = async () => {
    const param = {
      merchantUid: muid,
      impUid: import.meta.env.VITE_PORTONE_IMP_KEY,
      productId,
      paidAt: getNowUnixTimestamp(),
      price: 500, //ToDo:
      personnel: 1,
    };
    console.log(param);
    try {
      const response = await api.post(`/v1/reservation/client/payment`, param);

      if (response?.status === 200) {
        setContent(response.data);
        console.log(response.data);

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
    getReservation();
  }, []);
  useEffect(() => {
    if (isPaid === true) {
      postReservationPaymentValidation();
    }
    // navigateTo('/tour/reservation/complete', {
    //   state: {
    //     muid,
    //   },
    // });
  }, [isPaid]);

  return <ReservationPayView onComplete={onComplete} content={content} setIsPaid={setIsPaid} />;
};
export default ReservationPay;
