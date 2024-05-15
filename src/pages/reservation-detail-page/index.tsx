import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGeoLocation } from '@/useGeoLocation';
import { SlickSettingsType, UserType } from '@/types/common';
import ReservationDetailView from './reservation-detail-page';
import axios from 'axios';
import moment, { Moment } from 'moment';
import { user } from '@/constants/test';
import { FocusedInputShape } from 'react-dates';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

function ReservationDetail() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [content, setContent] = useState<UserType>(user);
  const [startDate, setStartDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<'startDate' | 'endDate'>('startDate');

  const { location, error } = useGeoLocation(geolocationOptions);
  const navigateTo = useNavigate();
  const pageLocation = useLocation();
  const userId = new URLSearchParams(pageLocation.search).get('id');

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
    if (!dragging) navigateTo('/tour/detail');
  };

  const onClickComplete = () => {
    navigateTo('/tour/reservation/complete');
  };

  const getReservationDetail = async () => {
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
    // getReservationDetail();
  }, []);

  return (
    <ReservationDetailView
      startDate={startDate}
      endDate={endDate}
      focusedInput={focusedInput}
      handleDatesChange={handleDatesChange}
      handleFocusChange={handleFocusChange}
      content={content}
      onClickTripImage={onClickTripImage}
      location={location}
      selectedCategory={selectedCategory}
      onCategoryClick={onCategoryClick}
      onClickComplete={onClickComplete}
    />
  );
}
export default ReservationDetail;
