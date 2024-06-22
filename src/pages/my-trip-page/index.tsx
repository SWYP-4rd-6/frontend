import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CategoryKorType,
  GuideProductType,
  MainContentType,
  ReservationType,
  SearchContentType,
  SlickSettingsType,
} from '@/types/common';
import MyTripPageView from '@/pages/my-trip-page/my-trp-page';
import axios from 'axios';
import { GUIDE_PRODUCT_DATA, MAIN_CONTENT_DATA, SEARCH_DATA } from '@/constants/test';
import { getTagName } from '@/utils';
import { authAxiosInstance } from '@/apis/axios';

function MyTrip() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('여행자');
  const [commingContent, setCommingContent] = useState<ReservationType[]>([]);
  const [pastContent, setPastContent] = useState<ReservationType[]>([]);

  const navigateTo = useNavigate();
  const onCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

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

  const getContent = async (name: string): Promise<boolean> => {
    const token = localStorage.getItem('accessToken');
    setCommingContent([]);
    setPastContent([]);
    try {
      const response = await authAxiosInstance.post(
        `${import.meta.env.VITE_BACKEND_URL}/v1/reservation/${name}/list`,
        {
          timeFilter: 0,
          statusFilter: 0,
          offset: 0,
          pageSize: 5,
        },
      );

      if (response.status === 200) {
        console.log('success');
        const today = new Date();
        const beforeToday: any = [];
        const afterToday: any = [];

        let startTime;
        console.log(response.data);
        response.data?.map((item: any, i: any) => {
          startTime = new Date(item.product.guideStartTime);

          if (startTime < today) {
            beforeToday.push(item);
          } else {
            // 오늘이후인 경우
            afterToday.push(item);
          }
        });
        setCommingContent(afterToday);
        setPastContent(beforeToday);

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
    if (selectedCategory === '여행자') getContent('client');
    else getContent('guide');
  }, [selectedCategory]);

  return (
    <MyTripPageView
      slickSettings={slickSettings}
      multiSlickSettings={multiSlickSettings}
      selectedCategory={selectedCategory}
      onCategoryClick={onCategoryClick}
      commingContent={commingContent}
      pastContent={pastContent}
    />
  );
}
export default MyTrip;
