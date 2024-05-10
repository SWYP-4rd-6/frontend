import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MaterialSymbol } from 'react-material-symbols';

import CategoryButton from '@/components/CategoryButton';
import SlideCard from '@/components/SlideCard';
import FloatingButton from '@/components/FloatingButton';
import BottomNav from '@/components/BottomNav';
import DoubleLine from '@/components/DoubleLine';
import { ILocation } from '@/types/common';

interface PropsType {
  multiSlickSettings: {
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
  };
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
}
const categories = [
  '전체',
  '근처',
  '추천',
  '먹거리',
  '관광',
  '야외 활동',
  '놀거리',
  '문화예술',
  '스포츠/운동',
];

const HomeMorePageView = ({
  multiSlickSettings,
  selectedCategory,
  handleCategoryClick,
}: PropsType) => {
  return (
    <div className=" ">
      <div className="px-6 pt-4 p-8"></div>
      <DoubleLine />
      <div className="px-6 pt-6">
        <div className="text-signature font-light text-4xl py-2 ">
          <span className="font-black">{'현위치'}</span>로<br /> 여행을 떠나볼가요?
        </div>
      </div>
      <div className="category-wrap">
        <Slider {...multiSlickSettings}>
          {categories.map((category, index) => (
            <CategoryButton
              key={index}
              text={category}
              active={selectedCategory === category}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
          <div className="w-60"></div>
        </Slider>
      </div>

      <section className="content-section p-5">
        <div className="grid-img-wrap">
          <img src="trip_image_sample1.png" />
          <img src="trip_image_sample2.png" />
          <img src="trip_image_sample1.png" />
          <img src="trip_image_sample2.png" />
          <img src="trip_image_sample2.png" />
          <img src="trip_image_sample2.png" />
          <img src="trip_image_sample2.png" />
          <img src="trip_image_sample2.png" />
          <img src="trip_image_sample2.png" />
          <img src="trip_image_sample2.png" />
          <img src="trip_image_sample2.png" />
          <img src="trip_image_sample2.png" />
        </div>
      </section>
    </div>
  );
};

export default HomeMorePageView;
