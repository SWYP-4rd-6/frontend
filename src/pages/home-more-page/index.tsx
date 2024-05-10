import { useState } from 'react';

import HomeMorePageView from '@/pages/home-more-page/home-more-page';
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

interface CategoryButtonProps {
  text: string;
  active?: boolean;
  onClick: () => void;
}

function HomeMore() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const navigateTo = useNavigate();

  // 선택된 카테고리 변경 시 실행되는 함수
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    // 여기서 해당 카테고리에 맞는 데이터를 필터링하고 출력하는 로직을 추가할 수 있습니다.
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
    <HomeMorePageView
      multiSlickSettings={multiSlickSettings}
      selectedCategory={selectedCategory}
      handleCategoryClick={handleCategoryClick}
    />
  );
}
export default HomeMore;
