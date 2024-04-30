import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
    afterChange: (currentSlide: number) => void;
  };
  onClickTripImage: () => void;
}

const HomeView = ({ slickSettings, onClickTripImage }: PropsType) => {
  return (
    <div className="overflow-hidden">
      <div>
        <div>Nice to MaThew</div>
        <input type="text" placeholder="떠나고 싶은 곳이 있나요?" className="border" />
        <button type="button">필터</button>
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
            <SlideCard title="한강 치맥파티" onClick={onClickTripImage} />
            <SlideCard title="한강 치맥파티2" onClick={onClickTripImage} />
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
      </div>
      <BottomNav />
    </div>
  );
};

export default HomeView;
