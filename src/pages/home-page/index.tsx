import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGeoLocation } from '@/useGeoLocation';
import { SlickSettingsType } from '@/types/common';
import HomePageView from '@/pages/home-page/home-page';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const { location, error } = useGeoLocation(geolocationOptions);
  const navigateTo = useNavigate();

  const onCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

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

  const onClickTripImage = () => {
    if (!dragging) navigateTo('/tour/detail');
  };

  const onClickMore = () => {
    navigateTo('/more');
  };

  return (
    <HomePageView
      slickSettings={slickSettings}
      multiSlickSettings={multiSlickSettings}
      onClickTripImage={onClickTripImage}
      location={location}
      selectedCategory={selectedCategory}
      onCategoryClick={onCategoryClick}
      onClickMore={onClickMore}
    />
  );
}
export default Home;
