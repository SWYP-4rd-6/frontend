import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TourDetailPageView from '@/pages/tour-detail-page/tour-detail-page';
import { SlickSettingsType, GuideProductType } from '@/types/common';
import SlideArrow from '@/components/Slide/SlideArrow';
import axios from 'axios';
import { guideProduct } from '@/constants/test';
import { formatDate, formatTimeRange } from '@/utils';
import useLoadingStore from '@/store/LoadingStore';

function TourDetail() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [currentReviewSlide, setCurrentReviewSlide] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const [content, setContent] = useState<GuideProductType>(guideProduct);
  const { loading, setLoading } = useLoadingStore();

  let userId: number | null = 1;
  const navigateTo = useNavigate();

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

  const onClickHost = () => {
    navigateTo('/host/detail?id=' + userId);
  };

  const onClickReservation = () => {
    navigateTo('/tour/reservation?id=' + userId);
  };

  const getTourDetail = async () => {
    setLoading(true);

    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/v1/products/${10}`);
      if (response.status === 200) {
        console.log(response);
        setContent(response.data);
        userId = response.data.userId;
        setLoading(false);
        return true;
      }
      console.log('fail');
      return false;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    //getTourDetail();
  }, []);
  return (
    <TourDetailPageView
      arrowSlickSettings={arrowSlickSettings}
      currentSlide={currentSlide}
      reviewSlickSettings={reviewSlickSettings}
      onClickHost={onClickHost}
      onClickReservation={onClickReservation}
      content={content}
      formatDate={formatDate}
      formatTimeRange={formatTimeRange}
      loading={loading}
    />
  );
}
export default TourDetail;
