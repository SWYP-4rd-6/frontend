import { useState } from 'react';
import HomeView from '@/pages/Home/home';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const navigateTo = useNavigate();

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

  const onClickTripImage = () => {
    navigateTo('/tour/detail');
  };

  return <HomeView slickSettings={slickSettings} onClickTripImage={onClickTripImage} />;
}
export default Home;
