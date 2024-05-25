import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { MaterialSymbol } from 'react-material-symbols';
import CategoryButton from '@/components/Button/CategoryButton';
import SlideCard from '@/components/Slide/SlideCard';
import BottomNavLayout from '@/components/BottomNavLayout';
import DoubleLine from '@/components/DoubleLIne';

import {
  CategoryKorType,
  ILocation,
  MainContentType,
  SearchContentType,
  SlickSettingsType,
} from '@/types/common';
import { CATEGORIES } from '@/constants/common';
import ImgList from '@/components/List/ImgLIst';
import useLoginStore from '@/store/LoginStore';

interface PropsType {
  slickSettings: SlickSettingsType;
  multiSlickSettings: SlickSettingsType;
  //location?: ILocation;
  selectedCategory: CategoryKorType;
  onCategoryClick: (category: CategoryKorType) => void;
  onClickMore: (cate: CategoryKorType) => void;
  onClickTripImage: (index: number, cate: string) => void;
  mainContent?: MainContentType;
  searchContent?: SearchContentType;
  location: string;
}

const HomePageView = ({
  slickSettings,
  multiSlickSettings,
  onClickTripImage,
  selectedCategory,
  onCategoryClick,
  onClickMore,
  searchContent,
  mainContent,
  location,
}: PropsType) => {
  const { isLogin } = useLoginStore();
  console.log(isLogin);
  return (
    <BottomNavLayout login={isLogin}>
      <div className="px-6 pt-4 pb-1">
        <img src="main_logo.png" className="w-40" alt="logo" />
      </div>
      <DoubleLine thick={2} />
      <div className="px-6 pt-6">
        <div className="relative  flex items-center *:flex *:items-center ">
          <input
            className="border-2 py-1 w-full text-center text-base placeholder-[#636363]"
            type="text"
            placeholder="떠나고 싶은 곳이 있나요?"
          />
          <Link to="#" className=" absolute left-4 ">
            <MaterialSymbol icon="search" size={24} fill grade={-25} color="#d9d9d9" />
          </Link>
          <Link to="#" className="absolute right-4">
            <MaterialSymbol icon="filter_list_alt" size={24} fill grade={-25} color="#d9d9d9" />
          </Link>
        </div>
      </div>
      <div className="category-wrap">
        <Slider {...multiSlickSettings}>
          {CATEGORIES.map((category: CategoryKorType, index) => (
            <CategoryButton
              key={index}
              text={category}
              active={selectedCategory === category}
              onClick={() => onCategoryClick(category)}
            />
          ))}
          <div className="w-60"></div>
        </Slider>
      </div>
      {selectedCategory === '전체' ? (
        <>
          <section className="pl-6 border-t-2 border-signature">
            <div className="flex justify-between items-center pr-9">
              <div className="sub-title  ">근처</div>
              <div className="flex items-center text-sub-bu text-base">
                {location}
                <MaterialSymbol icon="fmd_good" size={21} fill grade={-25} color="#d9d9d9" />
              </div>
            </div>
            <div className="w-full max-w-xl mx-auto"></div>
            <Slider {...slickSettings} className="pb-3">
              {mainContent?.nearGuideProducts?.map((item, i) => (
                <SlideCard key={i} content={item} onClick={() => onClickTripImage(i, 'NEAR')} />
              ))}
            </Slider>
          </section>
          <section className="content-section">
            <div className="sub-title">추천하는 여행</div>
            <div className="grid-img-wrap">
              {mainContent?.bestGuideProducts?.map((item, i) => (
                <ImgList key={i} content={item} onClick={() => onClickTripImage(i, 'BEST')} />
              ))}
            </div>
            <button
              type="button"
              className="border-2 border-sub-non w-full text-xl font-black text-sub-non py-1.5 my-5"
              onClick={() => onClickMore('추천')}
            >
              더보기
            </button>
          </section>
        </>
      ) : (
        <></>
      )}
      {/* 카테고리 전체 결과 영역 */}
      <section className="content-section pb-28">
        <div className="flex justify-between items-center pr-3">
          <div className="sub-title">{selectedCategory}</div>
          {selectedCategory === '근처' && (
            <div className="flex items-center text-sub-bu text-base">
              Seoul, South Korea
              <MaterialSymbol icon="fmd_good" size={21} fill grade={-25} color="#d9d9d9" />
            </div>
          )}
        </div>
        <div className="grid-img-wrap">
          {searchContent?.content.map((item, i) => (
            <ImgList key={i} content={item} onClick={() => onClickTripImage(i, selectedCategory)} />
          ))}
        </div>
        <button
          type="button"
          className="border-2 border-sub-non w-full text-xl font-black text-sub-non py-1.5 my-5"
        >
          더보기
        </button>
      </section>
    </BottomNavLayout>
  );
};

export default HomePageView;
