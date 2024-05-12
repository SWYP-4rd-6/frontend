import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlickSettingsType } from '@/types/common';
import { imgs } from '@/constants/test';
import Slide from '@/components/Slide/Slide';
import { MaterialSymbol } from 'react-material-symbols';
import DoubleLine from '@/components/DoubleLIne';
import BottomNav from '@/components/BottomNav';
import BottomButton from '@/components/Button/BottomButton';
import IconList from '@/components/IconList';
import CategoryIcon from '@/components/CategoryIcon';
import StarGrade from '@/components/StarGrade';
import ReviewSlide from '@/components/Slide/ReviewSlide';

interface PropsType {
  arrowSlickSettings: SlickSettingsType;
  currentSlide: number;
  reviewSlickSettings: SlickSettingsType;
}

const TourDetailPageView = ({
  arrowSlickSettings,
  currentSlide,
  reviewSlickSettings,
}: PropsType) => {
  return (
    <div className="">
      <div className="relative">
        <Slider {...arrowSlickSettings} className="">
          {imgs.map((img, index) => (
            <Slide key={index} src={img} />
          ))}
        </Slider>
        <div className="absolute bottom-5 w-full text-center ">
          <div className="  text-white font-light text-base z-50 ">
            <span className="font-black">{currentSlide + 1}</span>/{5}
          </div>
        </div>
      </div>
      <DoubleLine className="my-4" />
      <section className="px-6 ">
        <div className="title">한강 치맥파티</div>
        <ul className="*:mb-2">
          <IconList icon="fmd_good" text="한강 공원" />
          <IconList icon="payments" text="40000 원" />
          <IconList icon="person" text="플레이어">
            <div className="absolute items-end font-light right-6 text-sub-bu">
              호스트 정보 더보기{' '}
              <MaterialSymbol
                className="align-middle text-sub-bu"
                icon="arrow_forward"
                size={20}
                fill
                grade={80}
              />
            </div>
          </IconList>
        </ul>
        <div className="line-content">
          <div className="sub-title-2">특징(활동)</div>
          <div className="border-content text-sm p-2 ">
            즐겁고 재밌는 치맥파티 파티 즐겁고 재밌는 치맥파티 파티 즐겁고 재밌는 치맥파티 파티
            즐겁고 재밌는 치맥파티 파티 즐겁고 재밌는 치맥파티 파티
          </div>
        </div>
        <div>
          <div className=" line-content">
            <h2 className="sub-title-2">상세 설명</h2>
            <div className="border-content text-sm p-2">
              즐겁고 재밌는 치맥파티 파티 즐겁고 재밌는 치맥파티 파티 즐겁고 재밌는 치맥파티 파티
              즐겁고 재밌는 치맥파티 파티 즐겁고 재밌는 치맥파티 파티 즐겁고 재밌는 치맥파티 파티
              즐겁고 재밌는 치맥파티 파티 즐겁고 재밌는 치맥파티 파티 즐겁고 재밌는 치맥파티 파티
              즐겁고 재밌는 치맥파티 파티 즐겁고 재밌는 치맥파티 파티 즐겁고 재밌는 치맥파티 파티
              즐겁고 재밌는 치맥파티 파티
            </div>
          </div>
        </div>
        <div className="line-content ">
          <h2 className="sub-title-2">추가 정보</h2>
          <div className=" mb-2">
            <ul>
              <IconList icon="date_range" text="2024.08.01 ~ 2024.08.10" />
              <IconList icon="schedule" text="17:00~19:00 (2시간 소요)" />
            </ul>
            <div className="*:mr-5">
              <CategoryIcon icon="restaurant" text="먹걸리" />
              <CategoryIcon icon="nature" text="야외활동" />
            </div>
          </div>
        </div>
      </section>

      <section className="content-section ">
        <div className="sub-title-2">리뷰</div>
        <Slider {...reviewSlickSettings} className="pb-3">
          <ReviewSlide />
          <ReviewSlide />
          <ReviewSlide />
          <ReviewSlide />
          <ReviewSlide />
        </Slider>
      </section>
      <BottomButton />
    </div>
  );
};

export default TourDetailPageView;
