import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface PropsType {
  slickSettings: {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    afterChange: (currentSlide: number) => void;
  };
}

const TourDetailView = ({ slickSettings }: PropsType) => {
  return (
    <div className="overflow-hidden">
      {' '}
      <div>한강 치맥파티</div>
      <div>특징(활동)</div>
      <div>리뷰</div>
    </div>
  );
};

export default TourDetailView;
