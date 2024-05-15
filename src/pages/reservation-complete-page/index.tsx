import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGeoLocation } from '@/useGeoLocation';
import { SlickSettingsType, UserType } from '@/types/common';
import ReservationCompleteView from '@/pages/reservation-complete-page/reservation-complete-page';
import axios from 'axios';
import moment, { Moment } from 'moment';
import { user } from '@/constants/test';
import { FocusedInputShape } from 'react-dates';

function ReservationComplete() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [content, setContent] = useState<UserType>(user);
  const [startDate, setStartDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<'startDate' | 'endDate'>('startDate');

  const navigateTo = useNavigate();
  const pageLocation = useLocation();
  const userId = new URLSearchParams(pageLocation.search).get('id');

  const slickSettings: SlickSettingsType = {
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1.09,
    slidesToScroll: 1,
    touchThreshold: 100,
    beforeChange: () => {
      setDragging(true);
    },
    afterChange: (currentSlide) => {
      setDragging(false);
      setCurrentSlide(currentSlide);
    },
  };
  const multiSlickSettings: SlickSettingsType = {
    className: 'slider variable-width',
    centerPadding: '20px',
    arrows: false,
    infinite: false,
    speed: 400,
    slidesToScroll: 5,
    slidesToShow: 5.2,
    beforeChange: () => {
      setDragging(true);
    },
    afterChange: (currentSlide) => {
      setDragging(false);
    },
  };

  const handleDatesChange = ({
    startDate,
    endDate,
  }: {
    startDate: Moment | null;
    endDate: Moment | null;
  }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const handleFocusChange = (focusedInput: FocusedInputShape) => {
    setFocusedInput(focusedInput);
  };

  const onCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const onClickTripImage = () => {
    if (!dragging) navigateTo('/tour/complete');
  };

  const onClickMore = () => {
    navigateTo('/more');
  };

  const getReservationComplete = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/v1/users/${userId}`);
      if (response.status === 200) {
        console.log('success');
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
    // getReservationComplete();
  }, []);

  return (
    <ReservationCompleteView
      slickSettings={slickSettings}
      multiSlickSettings={multiSlickSettings}
      startDate={startDate}
      endDate={endDate}
      focusedInput={focusedInput}
      handleDatesChange={handleDatesChange}
      handleFocusChange={handleFocusChange}
      content={content}
      onClickTripImage={onClickTripImage}
      selectedCategory={selectedCategory}
      onCategoryClick={onCategoryClick}
      onClickMore={onClickMore}
    />
  );
}
export default ReservationComplete;
