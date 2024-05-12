import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TourDetailPageView from '@/pages/tour-detail-page/tour-detail-page';
import { SlickSettingsType } from '@/types/common';
import SlideArrow from '@/components/Slide/SlideArrow';

function TourDetail() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [currentReviewSlide, setCurrentReviewSlide] = useState<number>(0);

  const [dragging, setDragging] = useState<boolean>(false);

  const arrowSlickSettings: SlickSettingsType = {
    infinite: false,
    arrows: true, //
    speed: 500,
    slidesToShow: 1, //
    slidesToScroll: 1,
    touchThreshold: 100,
    beforeChange: () => {
      setDragging(true);
    },
    afterChange: (currentSlide) => {
      setDragging(false);
      setCurrentSlide(currentSlide);
    },
    prevArrow: <SlideArrow direction="prev" />,
    nextArrow: <SlideArrow direction="next" />,
  };

  const reviewSlickSettings: SlickSettingsType = {
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1.4,
    touchThreshold: 100,
    beforeChange: () => {
      setDragging(true);
    },
    afterChange: (currentReviewSlide) => {
      setDragging(false);
      setCurrentReviewSlide(currentReviewSlide);
    },
  };

  return (
    <TourDetailPageView
      arrowSlickSettings={arrowSlickSettings}
      currentSlide={currentSlide}
      reviewSlickSettings={reviewSlickSettings}
    />
  );
}
export default TourDetail;
