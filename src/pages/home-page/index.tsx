import { useState } from 'react';

import HomePageView from '@/pages/home-page/home-page';
import { useNavigate } from 'react-router-dom';
import { useGeoLocation } from '@/useGeoLocation';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

interface SlickSettingsType {
  className?: string;
  centerMode?: boolean;
  arrows: boolean;
  centerPadding?: string;
  rows?: number;
  slidesPerRow?: number;
  dots?: boolean;
  initialSlide?: number;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll?: number;
  touchThreshold?: number;
  beforeChange: () => void;
  afterChange: (currentSlide: number) => void;
  variableWidth?: boolean;
}

function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const { location, error } = useGeoLocation(geolocationOptions);
  const navigateTo = useNavigate();

  const slickSettings: SlickSettingsType = {
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1.05,
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

  const onClickTripImage = () => {
    if (!dragging) navigateTo('/tour/detail');
  };

  return (
    <HomePageView
      slickSettings={slickSettings}
      multiSlickSettings={multiSlickSettings}
      onClickTripImage={onClickTripImage}
      location={location}
    />
  );
}
export default Home;
