import { useState } from 'react';

import HomePageView from '@/pages/home-page/home-page';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const navigateTo = useNavigate();

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
    />
  );
}
export default Home;
