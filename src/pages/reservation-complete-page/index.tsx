import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ReservationCompleteView from '@/pages/reservation-complete-page/reservation-complete-page';
import { api } from '@/api/axios';
import { GuideProductType } from '@/types/common';

function ReservationComplete() {
  const [content, setContent] = useState<GuideProductType>();
  const navigateTo = useNavigate();
  const location = useLocation();
  const { productId } = location.state;
  const onClick = () => {
    navigateTo('/');
  };
  const getReservationComplete = async () => {
    try {
      const response = await api.get(
        `${import.meta.env.VITE_BACKEND_URL}/v1/products/${productId}`,
      );
      if (response.status === 200) {
        setContent(response.data);
        return true;
      }
      return false;
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getReservationComplete();
  }, []);

  return <ReservationCompleteView content={content} onClick={onClick} />;
}
export default ReservationComplete;
