import Slider from 'react-slick';

import { SlickSettingsType, GuideProductType } from '@/types/common';
import Slide from '@/components/Slide/Slide';
import { MaterialSymbol } from 'react-material-symbols';
import DoubleLine from '@/components/DoubleLIne';
import BottomButton from '@/components/Button/BottomButton';
import IconList from '@/components/List/IconList';
import CategoryIcon from '@/components/CategoryIcon';
import ReviewSlide from '@/components/Slide/ReviewSlide';
import { formatDate2, formatTime, getTagIcon, getTagNameKor } from '@/utils';
import Header from '@/components/Header/Header';
import Loading from '@/components/Loading';

interface PropsType {
  arrowSlickSettings: SlickSettingsType;
  currentSlide: number;
  reviewSlickSettings: SlickSettingsType;
  onClickHost: () => void;
  content?: GuideProductType;
  formatDate: (dateString: string) => string | null;
  formatTimeRange: (start: string, end: string) => string;
  onClickReservation: () => void;
  loading: boolean;
}

const TourDetailPageView = ({
  arrowSlickSettings,
  currentSlide,
  reviewSlickSettings,
  onClickHost,
  onClickReservation,
  content,
  formatDate,
  formatTimeRange,
  loading,
}: PropsType) => {
  return (
    <div className="">
      <Header type="trans" />
      {content ? (
        <>
          <div className="relative ">
            <Slider {...arrowSlickSettings} className="">
              {content.images ? (
                content.images.map((img, index) => <Slide key={index} src={img} />)
              ) : (
                <Slide src={''} />
              )}
            </Slider>
            <div className="absolute bottom-5 w-full text-center ">
              <div className="  text-white font-light text-base z-50 ">
                <span className="font-black">{currentSlide + 1}</span>/{content.images?.length || 0}
              </div>
            </div>
          </div>

          <DoubleLine className="my-4" thick={2} />
          <section className="px-6 ">
            <div className="title">{content.title}</div>
            <ul className="*:mb-2">
              <IconList icon="fmd_good" text={content.description} />
              {/* ToDo:지역 불러오기 */}
              <IconList icon="payments" text={`${content.price?.toLocaleString()}원`} />
              <IconList icon="person" text={content.nickname}>
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
              <div className="inline-block  text-ellipsis line-content w-full">
                <h2 className="sub-title-2">상세 설명</h2>
                <div className="border-content text-sm p-2 ">
                  <div className="line-clamp-3 ">{content.description}</div>
                </div>
              </div>
            </div>
            <div className="line-content ">
              <h2 className="sub-title-2">추가 정보</h2>
              <div className=" mb-2">
                <ul>
                  <IconList
                    icon="date_range"
                    text={`${formatDate2(content.guideStart as string)} ~ ${formatDate2(content.guideEnd as string)}`}
                  />
                  <IconList
                    icon="schedule"
                    text={`${formatTime(content.guideStartTime as string)}~${formatTime(content.guideEndTime as string)} (${content.guideTime}시간 소요)`}
                  />
                  <span> </span>
                </ul>
                <div className="*:mr-5 pt-3 ">
                  {content.categories &&
                    content.categories.map((item, index) => (
                      <CategoryIcon
                        key={index}
                        icon={getTagIcon(item)}
                        text={getTagNameKor(item)}
                      />
                    ))}
                </div>
              </div>
            </div>
          </section>
          <section className="content-section pb-12 ">
            <div className="sub-title-2">리뷰</div>
            <Slider {...reviewSlickSettings} className="pb-3">
              {content.reviews &&
                content.reviews.map((item, index) => <ReviewSlide key={index} content={item} />)}
            </Slider>
          </section>
          <BottomButton
            className="sticky"
            buttons={[
              { text: '1:1 Message', icon: 'chat' },
              {
                text: '예약하기',
                onClick: onClickReservation,
                icon: 'local_activity',
              },
            ]}
          />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default TourDetailPageView;
