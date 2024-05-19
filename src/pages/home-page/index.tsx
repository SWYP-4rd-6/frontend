import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CategoryKorType,
  GuideProductType,
  MainContentType,
  SearchContentType,
  SlickSettingsType,
} from '@/types/common';
import HomePageView from '@/pages/home-page/home-page';
import axios from 'axios';
import { MAIN_CONTENT_DATA, SEARCH_DATA } from '@/constants/test';
import { getTagName } from '@/utils';
import { useGeoLocation } from '@/utils/useGeoLocation';
import { getLocation } from '@/utils/getLocation';
import useScrollStore from '@/store/scrollStore';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKorType>('전체');
  const [mainContent, setMainContent] = useState<MainContentType>(); //MAIN_CONTENT_DATA
  const [searchContent, setSearchContent] = useState<SearchContentType>(); //SEARCH_DATA
  //sconst { location, error } = useGeoLocation(geolocationOptions);
  const [location, setLocation] = useState('Seoul, South Korea');
  const navigateTo = useNavigate();
  const onCategoryClick = (category: CategoryKorType) => {
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

  const getTripContent = (index: number, cate?: string): GuideProductType | undefined => {
    switch (cate) {
      case 'NEAR':
        return mainContent?.nearGuideProducts[index];
      case 'BEST':
        return mainContent?.bestGuideProducts[index];
      default:
        return searchContent?.content[index];
    }
  };

  const onClickTripImage = (index: number, cate: string) => {
    const content = getTripContent(index, cate);
    if (!dragging && content) navigateTo('/tour/detail?id=' + content.id);
  };

  const onClickMore = (cate: CategoryKorType) => {
    setSelectedCategory(cate);
  };

  const getMainContent = async (): Promise<boolean> => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/v1/search/main`, {
        params: {
          latitude: 37.4,
          longitude: 127.0,
          page: 0,
        },
      });

      if (response.status === 200) {
        console.log('success');
        setMainContent(response.data);
        setSearchContent(response.data.allGuideProducts);

        return true;
      }
      console.log('fail');
      return false;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getSearchContent = async (): Promise<boolean> => {
    try {
      const cate = getTagName(selectedCategory);
      if (cate === 'ALL') return true;
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/v1/search`, {
        params: {
          /* 지역 + 날짜 검색 param */
          // region: '서울특별시',
          // start: '2024-05-01',
          // end: '2024-05-02',
          /* 카테고리 검색 param */
          //  latitude: 34.567,
          // longitude: 127.235,
          category: getTagName(selectedCategory),
          /* 상세조건 검색 param */
          //  min: 0,
          //max: 12,
          //minD: 10,
          //maxD: 24,
          //dayT: 'ALL',
          //host: false,
          //lan: null,
          //page: 0,
          //size: 1,
          //sort: 'string',
        },
      });

      if (response.status === 200) {
        setSearchContent(response.data);
        return true;
      }
      console.log('fail');
      return false;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {}, []);

  useEffect(() => {
    if (selectedCategory === '전체') getMainContent();
    else getSearchContent();
  }, [selectedCategory]);

  /*
  const getUserLocation = async () => {
    try {
      const location = await getLocation();
      setLocation(`${location.address}`);
    } catch (error) {
      console.error(error);
    }
  };
*/
  return (
    <HomePageView
      mainContent={mainContent}
      searchContent={searchContent}
      slickSettings={slickSettings}
      multiSlickSettings={multiSlickSettings}
      onClickTripImage={onClickTripImage}
      selectedCategory={selectedCategory}
      onCategoryClick={onCategoryClick}
      onClickMore={onClickMore}
      location={location}
    />
  );
}
export default Home;
