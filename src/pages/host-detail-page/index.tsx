import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGeoLocation } from '@/utils/useGeoLocation';
import { GuideType, SlickSettingsType, UserType } from '@/types/common';
import HostDetailView from './host-detail-page';
import axios from 'axios';
import { USER_DATA } from '@/constants/test';

function HostDetail() {
  const [content, setContent] = useState<GuideType>(); //USER_DATA
  const navigateTo = useNavigate();
  const pageLocation = useLocation();
  const tourId = new URLSearchParams(pageLocation.search).get('id');

  const onClickTripImage = (index: number) => {
    if (content?.guideProducts) navigateTo('/tour/detail?id=' + content.guideProducts[index].id);
  };

  const getHostDetail = async () => {
    try {
      if (tourId) {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/v1/users/${tourId}`);
        if (response.status === 200) {
          console.log('success');
          setContent(response.data);

          return true;
        }
        console.log('fail');
        return false;
      }
      return;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    getHostDetail();
  }, []);
  return <HostDetailView content={content} onClickTripImage={onClickTripImage} />;
}
export default HostDetail;
