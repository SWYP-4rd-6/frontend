import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ReservationPayView from './reservation-pay-page';
import { RESERVATION_DATA } from '@/constants/test';
import { api } from '@/api/axios';
import { convertDateFormat, getNowUnixTimestamp } from '@/utils';
import { ReservationType } from '@/types/common';

const ReservationPay = () => {
  const [content, setContent] = useState<ReservationType>(); //RESERVATION_DATA
  const [uid, setUid] = useState<string>('');
  const [isLoding, setIsLoding] = useState<boolean>(false);
  const navigateTo = useNavigate();
  const location = useLocation();
  const { productId, price, muid, startDate, endDate, guideStartTime, guideEndTime } =
    location.state;

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
    }
  };

  //4.
  const postReservationPaymentValidation = async () => {
    setIsLoding(true);
    try {
      const response = await api.post(`/v1/reservation/client/payment/validation`, {
        imp_uid: uid,
      });

      if (response?.status === 200) {
        console.log(response.data);
        postReservationPaymentSave();

        return true;
      }
      console.log('fail');
      return false;
    } catch (error) {
      alert(error);
    }
    setIsLoding(false);
  };

  //5.
  const postReservationPaymentSave = async () => {
    const param = {
      merchantUid: muid,
      impUid: uid,
      productId,
      paidAt: getNowUnixTimestamp(),
      price,
      personnel: 1,
    };
    console.log(param);
    try {
      const response = await api.post(`/v1/reservation/client/payment`, param);

      if (response?.status === 200) {
        //setContent(response.data);
        navigateTo('/tour/reservation/complete', {
          state: {
            productId,
          },
        });
        console.log(response.data);

        return true;
      }
      postReservationPaymentCancel();
      return false;
    } catch (error) {
      postReservationPaymentCancel();
      throw error;
    }
  };

  //6
  const postReservationPaymentCancel = async () => {
    try {
      const response = await api.post(`/v1/reservation/client/cancel/${'muid'}`);

      if (response?.status === 200) {
        alert('결제 요청에 실패하여 취소되었습니다');
        navigateTo('/');
        console.log(response.data);
        return true;
      }
      console.log('fail');
      return false;
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    getReservation();
  }, []);
  useEffect(() => {
    if (uid) postReservationPaymentValidation();
  }, [uid]);

  return (
    <ReservationPayView
      content={content}
      startDate={startDate}
      endDate={endDate}
      setUid={setUid}
      isLoading={isLoding}
      guideStartTime={guideStartTime}
      guideEndTime={guideEndTime}
    />
  );
};
export default ReservationPay;
