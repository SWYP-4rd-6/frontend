import { useState } from 'react';
import HomeView from './home';

function Home() {
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

  return <HomeView slickSettings={slickSettings} />;
}
export default Home;
