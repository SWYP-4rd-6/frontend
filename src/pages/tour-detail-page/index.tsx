import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import TourDetailPageView from '@/pages/tour-detail-page/tour-detail-page';
import { SlickSettingsType, GuideProductType } from '@/types/common';
import SlideArrow from '@/components/Slide/SlideArrow';
import axios from 'axios';
import { GUIDE_PRODUCT_DATA } from '@/constants/test';
import { formatDate, formatTimeRange } from '@/utils';
import useLoadingStore from '@/store/LoadingStore';

function TourDetail() {
  const pageLocation = useLocation();
  const tourId = new URLSearchParams(pageLocation.search).get('id');
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [currentReviewSlide, setCurrentReviewSlide] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const [content, setContent] = useState<GuideProductType>(); //GUIDE_PRODUCT_DATA
  const { loading, setLoading } = useLoadingStore();
  const navigateTo = useNavigate();

  const arrowSlickSettings: SlickSettingsType = {
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
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
    if (content?.userId) {
      navigateTo('/host/detail?id=' + content.userId);
    }
  };

  const onClickReservation = () => {
    if (content) {
      navigateTo('/tour/reservation', {
        state: {
          id: content.id,
          guideStart: content.guideStart,
          guideEnd: content.guideEnd,
          price: content.price,
          guideTime: content.guideTime,
          title: content.title,
        },
      });
    }
  };

  const getTourDetail = async () => {
    setLoading(true);

    if (!tourId) return;
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/v1/products/${tourId}`);
      if (response.status === 200) {
        console.log(response);
        setContent(response.data);
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
    getTourDetail();
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
