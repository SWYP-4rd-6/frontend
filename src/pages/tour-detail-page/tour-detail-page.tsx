import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlickSettingsType, guideProductType } from '@/types/common';
import Slide from '@/components/Slide/Slide';
import { MaterialSymbol } from 'react-material-symbols';
import DoubleLine from '@/components/DoubleLIne';
import BottomButton from '@/components/Button/BottomButton';
import IconList from '@/components/IconList';
import CategoryIcon from '@/components/CategoryIcon';
import ReviewSlide from '@/components/Slide/ReviewSlide';
import { getTagIcon, getTagName } from '../../../utils';
import ArrowHeader from '@/components/Header/ArrowHeader';
import Header from '@/components/Header/Header';

interface PropsType {
  arrowSlickSettings: SlickSettingsType;
  currentSlide: number;
  reviewSlickSettings: SlickSettingsType;
  onClickHost: () => void;
  content?: guideProductType;
  formatDate: (dateString: string) => string;
  formatTimeRange: (start: string, end: string) => string;
  loading: boolean;
}

const TourDetailPageView = ({
  arrowSlickSettings,
  currentSlide,
  reviewSlickSettings,
  onClickHost,
  content,
  formatDate,
  formatTimeRange,
  loading,
}: PropsType) => {
  return (
    <div className="">
      {loading ? (
        <div>로딩중...</div>
      ) : (
        content && (
          <>
            {content.images && (
              <div className="relative">
                <Header type="trans" />
                <Slider {...arrowSlickSettings} className="">
                  {content.images.map((img, index) => (
                    <Slide key={index} src={img} />
                  ))}
                </Slider>
                <div className="absolute bottom-5 w-full text-center ">
                  <div className="  text-white font-light text-base z-50 ">
                    <span className="font-black">{currentSlide + 1}</span>/{content.images.length}
                  </div>
                </div>
              </div>
            )}
            <DoubleLine className="my-4" />
            <section className="px-6 ">
              <div className="title">{content.title}</div>
              <ul className="*:mb-2">
                <IconList icon="fmd_good" text={content.title} />
                {/* ToDo:지역 불러오기 */}
                <IconList icon="payments" text={`${content.price}원`} />
                <IconList icon="person" text={content.nickname as string}>
                  <button
                    onClick={onClickHost}
                    className="absolute items-end font-light right-6 text-sub-bu"
                  >
                    호스트 정보 더보기
                    <MaterialSymbol
                      className="align-middle text-sub-bu"
                      icon="arrow_forward"
                      size={20}
                      fill
                      grade={80}
                    />
                  </button>
                </IconList>
              </ul>
              <div className="line-content">
                <div className="sub-title-2">특징(활동)</div>
                <div className="border-content text-sm p-2 ">{content.title}</div>
              </div>
              <div>
                <div className=" line-content">
                  <h2 className="sub-title-2">상세 설명</h2>
                  <div className="border-content text-sm p-2">{content.description}</div>
                </div>
              </div>
              <div className="line-content ">
                <h2 className="sub-title-2">추가 정보</h2>
                <div className=" mb-2">
                  <ul>
                    <IconList
                      icon="date_range"
                      text={`${formatDate(content.guideStart as string)} ~ ${formatDate(content.guideEnd as string)}`}
                    />
                    <IconList
                      icon="schedule"
                      text={`${formatTimeRange(content.guideStart, content.guideEnd)}`}
                    />
                    {/* (${content.guideTime}시간 소요)` */}
                  </ul>
                  <div className="*:mr-5">
                    {content.categories &&
                      content.categories.map((item, index) => (
                        <CategoryIcon key={index} icon={getTagIcon(item)} text={getTagName(item)} />
                      ))}
                  </div>
                </div>
              </div>
            </section>
            <section className="content-section ">
              <div className="sub-title-2">리뷰</div>
              <Slider {...reviewSlickSettings} className="pb-3">
                {content.review &&
                  content.review.map((item, index) => <ReviewSlide key={index} content={item} />)}
              </Slider>
            </section>

            <BottomButton />
          </>
        )
      )}
    </div>
  );
};

export default TourDetailPageView;
