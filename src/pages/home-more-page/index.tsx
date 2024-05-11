import { useEffect, useState } from 'react';
import HomeMorePageView from '@/pages/home-more-page/home-more-page';
import { SlickSettingsType } from '@/types/common';

function HomeMore() {
  const [dragging, setDragging] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const onCategoryClick = (category: string) => {
    if (!dragging) setSelectedCategory(category);
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

  useEffect(() => {
    const category = new URL(document.URL).searchParams.get('c');
    if (category) {
      setSelectedCategory(category);
    }
  }, []);

  return (
    <HomeMorePageView
      multiSlickSettings={multiSlickSettings}
      selectedCategory={selectedCategory}
      onCategoryClick={onCategoryClick}
    />
  );
}
export default HomeMore;
