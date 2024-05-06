import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MaterialSymbol } from 'react-material-symbols';

import CategoryButton from '@/components/CategoryButton';
import SlideCard from '@/components/SlideCard';
import FloatingButton from '@/components/FloatingButton';
import BottomNav from '@/components/BottomNav';

interface PropsType {
  slickSettings: {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    touchThreshold: number;
    beforeChange: () => void;
    afterChange: (currentSlide: number) => void;
  };
  onClickTripImage: () => void;
}

const HomePageView = ({ slickSettings, onClickTripImage }: PropsType) => {
  return (
    <div className=" ">
      <div className="h-[172px] bg-slate-300">Nice to Matthew</div>
      <div className="px-6 py-5">
        <div className="relative flex items-center">
          <MaterialSymbol icon="search" size={24} fill grade={-25} color="black" />
          <input
            className="border px-2 w-full  text-center"
            type="text"
            placeholder="떠나고 싶은 곳이 있나요?"
          />
          <a href="#" className="items-center absolute right-5">
            <MaterialSymbol icon="filter_list_alt" size={24} fill grade={-25} color="black" />
          </a>
        </div>
      </div>
      <div>
        <CategoryButton text="카테고리" />
        <CategoryButton text="카테고리" />
        <CategoryButton text="카테고리" />
        <CategoryButton text="카테고리" />
        <CategoryButton text="카테고리" />
      </div>
      <section>
        <div className="flex justify-between">
          <div>근처</div>
          <div>Seoul, South Korea</div>
        </div>
        <div className="w-full max-w-xl mx-auto"></div>
        <Slider {...slickSettings}>
          <SlideCard
            title="한강 치맥파티"
            src="trip_image_sample1.png"
            onClick={onClickTripImage}
          />
          <SlideCard
            title="한강 치맥파티2"
            src="trip_image_sample1.png"
            onClick={onClickTripImage}
          />
        </Slider>
      </section>
      <section>
        <div>추천하는 여행</div>
        <div className="grid grid-cols-2 gap-4  place-items-center">
          <img src="trip_image_sample1.png" />
          <img src="trip_image_sample2.png" />
          <img src="trip_image_sample1.png" />
          <img src="trip_image_sample2.png" />
        </div>
      </section>
      <section>
        <div>전체</div>
        <div className="grid grid-cols-2 gap-4  place-items-center">
          <img src="trip_image_sample1.png" />
          <img src="trip_image_sample2.png" />
          <img src="trip_image_sample1.png" />
          <img src="trip_image_sample2.png" />
        </div>
      </section>
      <button type="button">더보기</button>
      <FloatingButton />
      <BottomNav />
    </div>
  );
};

export default HomePageView;
