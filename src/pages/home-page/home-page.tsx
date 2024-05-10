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
  slickSettings: {
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
  onClickTripImage: () => void;
  location?: ILocation;
}

const HomePageView = ({
  slickSettings,
  multiSlickSettings,
  onClickTripImage,
  location,
}: PropsType) => {
  return (
    <div className=" ">
      <div className="px-6 pt-4 pb-1">
        <img src="main_logo.png" className="w-40" alt="logo" />
      </div>
      <DoubleLine />
      <div className="px-6 pt-6">
        <div className="relative  flex items-center *:flex *:items-center ">
          <input
            className="border-2 py-1 w-full text-center text-base placeholder-[#636363]"
            type="text"
            placeholder="떠나고 싶은 곳이 있나요?"
          />
          <a href="#" className=" absolute left-4 ">
            <MaterialSymbol icon="search" size={24} fill grade={-25} color="#d9d9d9" />
          </a>
          <a href="#" className="absolute right-4">
            <MaterialSymbol icon="filter_list_alt" size={24} fill grade={-25} color="#d9d9d9" />
          </a>
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

      <section className="content-section">
        <div className="flex justify-between items-center pr-9">
          <div className="sub-tiltle  ">근처</div>
          <div className="flex items-center text-sub-bu text-base">
            Seoul, South Korea
            {/* {location && location.latitude} */}
            <MaterialSymbol icon="fmd_good" size={21} fill grade={-25} color="#d9d9d9" />
          </div>
        </div>
        <div className="w-full max-w-xl mx-auto"></div>
        <Slider {...slickSettings} className="pb-3">
          <SlideCard
            fromDate="2024.08.08"
            toDate="2024.08.08"
            tags={['먹거리', '야외활동']}
            title="한강 치맥파티"
            src="trip_package_sample.png"
            onClick={onClickTripImage}
          />
          <SlideCard
            fromDate="2024.08.08"
            toDate="2024.08.08"
            tags={['먹거리', '야외활동']}
            title="한강 치맥파티"
            src="trip_image_sample1.png"
            onClick={onClickTripImage}
          />
          <SlideCard
            fromDate="2024.08.08"
            toDate="2024.08.08"
            tags={['먹거리', '야외활동']}
            title="한강 치맥파티"
            src="trip_image_sample1.png"
            onClick={onClickTripImage}
          />
        </Slider>
      </section>
      <section className="content-section">
        <div className="sub-tiltle">추천하는 여행</div>
        <div className="grid-img-wrap">
          <img src="trip_image_sample1.png" />
          <img src="trip_image_sample2.png" />
          <img src="trip_image_sample1.png" />
          <img src="trip_image_sample2.png" />
        </div>
        <button
          type="button"
          className="border-2 border-sub-non w-full text-xl font-black text-sub-non py-1.5 my-5"
        >
          더보기
        </button>
      </section>
      <section className="content-section">
        <div className="sub-tiltle">전체</div>
        <div className="grid-img-wrap">
          <img src="trip_image_sample1.png" />
          <img src="trip_image_sample2.png" />
          <img src="trip_image_sample1.png" />
          <img src="trip_image_sample2.png" />
        </div>
        <button
          type="button"
          className="border-2 border-sub-non w-full text-xl font-black text-sub-non py-1.5 my-5"
        >
          더보기
        </button>
      </section>

      <FloatingButton />
      <BottomNav />
    </div>
  );
};

export default HomePageView;
