import Payment from '@/components/Payment';
import Header from '@/components/Header/Header';
import { CategoryType, GuideProductType, ReservationType, ReviewType } from '@/types/common';
import {
  calculateDays,
  formatDateKor,
  formatStringDateKor,
  formatTimeRange,
  getTagNameKor,
} from '@/utils';
import BottomButton from '@/components/Button/BottomButton';
import Loading from '@/components/Loading';
import IconText from '@/components/IconText';
interface PropsType {
  content?: ReservationType;
  setUid: any;
  isLoading: boolean;
  startDate: string;
  endDate: string;
}
const ReservationPayView = ({ startDate, endDate, content, setUid, isLoading }: PropsType) => {
  const { price, merchantUid, product } = content || {};
  console.log(startDate);
  return (
    <>
      <Header />
      <div className="">
        {content && !isLoading ? (
          <>
            <div className="px-6">
              <div className="*:py-1.5 pb-3 border-b-2 border-signature">
                <div className="title-lg-bk">예약을 위해서는</div>
                <div className="title-lg ">결제가 필요해요.</div>
              </div>
              <div className="border-b-2 border-signature">
                <div className="sub-title-2">여행 상품</div>
                <div className="mb-4 border-content p-[1.1rem] flex">
                  <img src={product.thumb} className="size-24 mr-2" />
                  <div className="relative  flex-1">
                    <div className="text-signature font-black">{product.title}</div>
                    {product.categories?.map((item: CategoryType, i: number) => (
                      <span key={i} className="align-top pt-4 mr-1 font-light text-sub-bu text-xs ">
                        #{getTagNameKor(item)}
                      </span>
                    ))}
                    <div className="absolute bottom-0">
                      <IconText
                        text={product.locationName}
                        textClass={'text-black '}
                        iconClass={'text-signature'}
                        icon={'fmd_good'}
                        iconSize={19}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b-2 border-signature">
                <div className="sub-title-2">예약 정보</div>
                <div className="px-4 pb-4">
                  <IconText
                    text="날짜"
                    textClass={' font-effect '}
                    iconClass={'text-signature pr-1'}
                    icon={'date_range'}
                    iconSize={22}
                  />{' '}
                  <div className="ml-[1.8rem] font-light">
                    {startDate &&
                      `${formatStringDateKor(startDate)}${endDate && ' ~ ' + formatStringDateKor(endDate)}`}{' '}
                    ({startDate && endDate && calculateDays(startDate, endDate)}
                    일)
                  </div>
                  <IconText
                    text="예약 시간"
                    textClass={' font-effect '}
                    iconClass={'text-signature pr-1'}
                    icon={'schedule'}
                    iconSize={22}
                  />{' '}
                  <div className="ml-[1.8rem] font-light">
                    {`${formatTimeRange(content.product.guideStart, content.product.guideEnd)} (${content.product.guideTime}시간 소요)`}
                  </div>
                  <IconText
                    text="결제 금액"
                    textClass={' font-effect '}
                    iconClass={'text-signature pr-1'}
                    icon={'payments'}
                    iconSize={22}
                  />{' '}
                  <div className="text-signature font-black ml-[1.8rem]">
                    {content.price && content.price.toLocaleString()}원
                  </div>
                </div>
              </div>
              <div className="pb-3 border-b-2 border-signature">
                <div className="sub-title-2 ">환불 정책</div>
                <div className="p-1 text-[#686868]">
                  이 예약은 <u>결제일 기준 3일이내</u> 예약 미확정 또는 가이드의 <u>예약 취소시</u>
                  에 환불됩니다.
                </div>
              </div>
              <div>
                <div className="sub-title-2">유의사항</div>
                <ol className="list-decimal *:ml-4 ml-3 py-1">
                  <li>매튜와 만나면 반갑게 인사를 나눠주세요!</li>
                  <li>매튜와 서로 서로 소중한 친구처럼 아껴주세요!</li>
                  <li>여행 후에 리뷰는 잊지마세요!</li>
                  <li>매튜와 함께 즐거운 여행 되세요!</li>
                </ol>
              </div>

              <div className="*:font-poppins text-signature text-4xl py-8">
                <span className="font-extralight ">Nice to </span>
                <span className="font-extrabold *:font-poppins ">
                  Mat
                  <p className="transform scale-x-[-1] inline-block">t</p>
                  <span>hew</span>
                  <span className="font-extralight">!</span>
                </span>
              </div>
            </div>
            <BottomButton
              className="sticky"
              buttons={[
                {
                  active: true,
                },
              ]}
            >
              {content && price && merchantUid && (
                <Payment
                  text={`${price.toLocaleString()}원 결제하기`}
                  mid={merchantUid}
                  price={price}
                  title={content.product.title ? content.product.title : '매튜 여행 상품'}
                  onTrue={(uid: number) => {
                    setUid(uid);
                  }}
                />
              )}
            </BottomButton>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};
export default ReservationPayView;
