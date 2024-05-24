import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ReservationCompleteView from '@/pages/reservation-complete-page/reservation-complete-page';
import axios from 'axios';
import { RESERVATION_DATA } from '@/constants/test';
import { api } from '@/api/axios';

function ReservationComplete() {
  const [content, setContent] = useState(RESERVATION_DATA);

  const navigateTo = useNavigate();
  const pageLocation = useLocation();
  const userId = new URLSearchParams(pageLocation.search).get('id');

  //5
  const postReservationPaymentCancel = async () => {
    try {
      const response = await api.post(`/v1/reservation/client/cancel/${'muid'}`);

      if (response?.status === 200) {
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

  const getReservationComplete = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/v1/users/${userId}`);
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
    postReservationPaymentValidation();
  }, []);

  return <ReservationCompleteView content={content} />;
}
export default ReservationComplete;
