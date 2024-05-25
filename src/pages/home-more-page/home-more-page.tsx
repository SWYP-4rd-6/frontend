import Slider from 'react-slick';
import CategoryButton from '@/components/Button/CategoryButton';
import DoubleLine from '@/components/DoubleLIne';
import { CATEGORIES } from '@/constants/common';
import { SlickSettingsType } from '@/types/common';

interface PropsType {
  multiSlickSettings: SlickSettingsType;
  selectedCategory: string;
  onCategoryClick: (category: string) => void;
}

const HomeMorePageView = ({ multiSlickSettings, selectedCategory, onCategoryClick }: PropsType) => {
  return (
    <div>
      <div className="px-6 pt-4 p-8"></div>
      <DoubleLine thick={2} />

      <div className="px-6 pt-6">
        <div className="text-signature font-light text-4xl py-2 ">
          <span className="font-black">{'현위치'}</span>로<br /> 여행을 떠나볼가요?
        </div>
      </div>
      <div className="category-wrap">
        <Slider {...multiSlickSettings}>
          {CATEGORIES.map((category, index) => (
            <CategoryButton
              key={index}
              text={category}
              active={selectedCategory === category}
              onClick={() => onCategoryClick(category)}
            />
          ))}
          <div className="w-60"></div>
        </Slider>
      </div>

      <section className="content-section p-5 ">
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
