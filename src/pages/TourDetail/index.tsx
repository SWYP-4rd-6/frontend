import { useState } from 'react';
import TourDetailView from '@/pages/TourDetail/tourDetail';

function TourDetail() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  interface SlickSettingsType {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    afterChange: (currentSlide: number) => void;
  }

  const slickSettings: SlickSettingsType = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentSlide) => {
      setCurrentSlide(currentSlide);
    },
  };

  return <TourDetailView slickSettings={slickSettings} />;
}
export default TourDetail;
