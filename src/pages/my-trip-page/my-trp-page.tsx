import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { MaterialSymbol } from 'react-material-symbols';
import CategoryButton from '@/components/Button/CategoryButton';
import SlideCard from '@/components/Slide/SlideCard';
import BottomNavLayout from '@/components/BottomNavLayout';
import DoubleLine from '@/components/DoubleLIne';
import {
  CategoryKorType,
  GuideProductType,
  ILocation,
  MainContentType,
  ReservationType,
  SearchContentType,
  SlickSettingsType,
} from '@/types/common';
import { CATEGORIES } from '@/constants/common';
import ImgList from '@/components/List/ImgLIst';
import useLoginStore from '@/store/LoginStore';
import Ticket from '@/components/Ticket';

interface PropsType {
  slickSettings: SlickSettingsType;
  multiSlickSettings: SlickSettingsType;
  selectedCategory: string;
  onCategoryClick: (category: string) => void;
  pastContent: ReservationType[];
  commingContent: ReservationType[];
}

const MyTripPageView = ({
  slickSettings,
  multiSlickSettings,
  selectedCategory,
  onCategoryClick,
  pastContent,
  commingContent,
}: PropsType) => {
  const { isLogin } = useLoginStore();
  const navigateTo = useNavigate();

  return (
    <BottomNavLayout login={isLogin}>
      <div className="px-6 pt-4 pb-1">
        <img src="/images/logo_voyage.png" className="w-56" alt="logo" />
      </div>
      <div className="px-6 pt-8 *:w-1/2 *:py-2 *:text-xl font-black">
        <button
          type="button"
          className={`border-2  w-[4.2rem]  text-xs py-[0.3rem] ${selectedCategory === '여행자' ? 'bg-signature text-white border-signature font-bold' : 'text-sub-bu border-sub-non'}`}
          onClick={() => onCategoryClick('여행자')}
        >
          여행자
        </button>
        <button
          type="button"
          className={`border-2  w-[4.2rem]  text-xs py-[0.3rem] ${selectedCategory === '가이드' ? 'bg-signature text-white border-signature font-bold' : 'text-sub-non   border-sub-non'}`}
          onClick={() => onCategoryClick('가이드')}
        >
          가이드
        </button>
      </div>
      <DoubleLine thick={2} className="w-full p-0" />
      {commingContent.length > 0 || pastContent.length > 0 ? (
        <>
          <div className="border-b-2 border-signature category-wrap">
            <div className="sub-title ">다가오는 여행</div>
            <Slider {...slickSettings}>
              {commingContent.map((item, index) => (
                <Ticket
                  content={item.product}
                  key={index}
                  src={item.product.thumb}
                  classname="mr-5"
                />
              ))}
            </Slider>
          </div>
          <div>
            <div className="sub-title  category-wrap">지난 여행</div>
            {pastContent.map((item, index) => (
              <Ticket
                content={item.product}
                key={index}
                src={item.product.thumb}
                classname="mr-5 p-5"
              />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center flex flex-col items-center justify-center mt-32">
          <div className="text-signature pt-2.5 pb-1.5 font-bold">
            나에게 맞는 여행을 예약해보세요
          </div>
          <div className="text-signature pb-1.5 font-extralight ">
            예약된 여행을 확인할 수 없어요
          </div>
          <button
            type="button"
            className={`border-2 bg-signature text-white border-signature  px-8 py-2 my-10 text-xl font-black `}
            onClick={() => {
              navigateTo('/');
            }}
          >
            여행 둘러보기
          </button>
        </div>
      )}

      <div className="px-6 pt-6"></div>
    </BottomNavLayout>
  );
};

export default MyTripPageView;
