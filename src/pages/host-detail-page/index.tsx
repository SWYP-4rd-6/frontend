import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGeoLocation } from '@/useGeoLocation';
import { SlickSettingsType, UserType } from '@/types/common';
import HostDetailView from './host-detail-page';
import axios from 'axios';
import { user } from '@/constants/test';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

function HostDetail() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [content, setContent] = useState<UserType>(user);
  const { location, error } = useGeoLocation(geolocationOptions);
  const navigateTo = useNavigate();
  const pageLocation = useLocation();
  const userId = new URLSearchParams(pageLocation.search).get('id');

  const slickSettings: SlickSettingsType = {
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1.09,
    slidesToScroll: 1,
    touchThreshold: 100,
    beforeChange: () => {
      setDragging(true);
    },
    afterChange: (currentSlide) => {
      setDragging(false);
      setCurrentSlide(currentSlide);
    },
  };
  const multiSlickSettings: SlickSettingsType = {
    className: 'slider variable-width',
    centerPadding: '20px',
    arrows: false,
    infinite: false,
    speed: 400,
    slidesToScroll: 5,
    slidesToShow: 5.2,
    beforeChange: () => {
      setDragging(true);
    },
    afterChange: (currentSlide) => {
      setDragging(false);
    },
  };

  const onCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const onClickTripImage = () => {
    if (!dragging) navigateTo('/tour/detail');
  };

  const onClickMore = () => {
    navigateTo('/more');
  };

  const getHostDetail = async () => {
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
    // getHostDetail();
  }, []);
  return (
    <HostDetailView
      slickSettings={slickSettings}
      multiSlickSettings={multiSlickSettings}
      content={content}
      onClickTripImage={onClickTripImage}
      location={location}
      selectedCategory={selectedCategory}
      onCategoryClick={onCategoryClick}
      onClickMore={onClickMore}
    />
  );
}
export default HostDetail;
