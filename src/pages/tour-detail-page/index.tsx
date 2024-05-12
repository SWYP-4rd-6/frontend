import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TourDetailPageView from '@/pages/tour-detail-page/tour-detail-page';
import { SlickSettingsType, guideProductType } from '@/types/common';
import SlideArrow from '@/components/Slide/SlideArrow';
import axios from 'axios';
import { guideProduct } from '@/constants/test';
import { DateTime } from 'luxon';

function TourDetail() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [currentReviewSlide, setCurrentReviewSlide] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const [content, setContent] = useState<guideProductType>(guideProduct);
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
    navigateTo('/host/detail');
  };

  function formatDate(dateString: string): string {
    const date = DateTime.fromISO(dateString);
    return date.toFormat('yyyy.LL.dd'); // 2024.05.12
  }

  const formatTimeRange = (start: string, end: string): string => {
    const startTime = DateTime.fromISO(start);
    const endTime = DateTime.fromISO(end);
    const startTimeString = startTime.toFormat('HH:mm');
    const endTimeString = endTime.toFormat('HH:mm');
    console.log(endTimeString);
    console.log(startTimeString);

    const duration = endTime.diff(startTime, 'hours').hours;
    return `${startTimeString}~${endTimeString} (${duration}시간 소요)`; //"17:00~19:00 (2시간 소요)
  };

  const getTourDetail = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/v1/products/${10}`);
      if (response.status === 200) {
        console.log('success');
        console.log(response.data);
        console.log(response.data.content.images[1]);
        setContent(response.data);

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
      content={content}
      formatDate={formatDate}
      formatTimeRange={formatTimeRange}
    />
  );
}
export default TourDetail;
