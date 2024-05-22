import { ChangeEvent } from 'react';
import type { PG, PaymentMethod } from '@/types/portone';
import Payment from '@/components/Payment';
import Header from '@/components/Header/Header';
import { MaterialSymbol } from 'react-material-symbols';
import { CategoryType, GuideProductType, ReservationType, ReviewType } from '@/types/common';
import { calculateDays, formatDateKor, formatTimeRange, getTagNameKor } from '@/utils';
import BottomButton from '@/components/Button/BottomButton';
import Loading from '@/components/Loading';
import LoginHeader from '@/components/Header/LoginHeader';
interface PropsType {
  onComplete: () => void;
  content: ReservationType;
}
//onComplete
const ReservationPayView = ({ onComplete, content }: PropsType) => {
  return (
    <>
      <Header />
      <div className="px-4">
        {content ? (
          <div className="border-b-2 border-signature">
            <div className="title-lg-bk">예약을 위해서는</div>
            <div className="title-lg border-b-2 border-signature">결제가 필요해요.</div>
            <div className="border-b-2 border-signature">
              <div className="sub-title-2">여행 상품</div>
              <div className="mb-4 border-content">
                <img src={content.product.thumb} className="size-24" />
                <div className="text-signature font-black">{content.product.title}</div>
                <div className="text-gray-500">
                  {content.product.categories?.map((item: CategoryType, i: number) => (
                    <span key={i} className="font-light text-sub-bu text-xs">
                      #{getTagNameKor(item)}
                    </span>
                  ))}
                </div>
                <MaterialSymbol
                  icon="fmd_good"
                  size={19}
                  fill
                  grade={-25}
                  className="text-signature"
                />
                <div>{content.product.locationName}</div>
              </div>
            </div>
            <div className="border-b-2 border-signature">
              <div className="sub-title-2">예약 정보</div>

              <div>
                <div className="sub-title-2">날짜</div>
                <div className="font-light">
                  {content.guideStart && formatDateKor(content.guideStart)} (
                  {content.guideStart &&
                    content.guideEnd &&
                    calculateDays(content.guideStart, content.guideEnd)}
                  일)
                </div>
              </div>
              <div className="font-light">
                <div className="sub-title-2">예약 시간</div>
                <div>{content.product.guideTime}</div>
              </div>
              <div>
                <div className="sub-title-2">결제 금액</div>
                <div className="text-signature font-black">
                  {content.price && content.price.toLocaleString()}원
                </div>
              </div>
            </div>

            <div className="mt-4 border-b-2 border-signature">
              <div className="sub-title-2 ">환불 정책</div>
              <div>
                이 예약은 결제일 기준 3일이내 예약 미확정 또는 가이드의 예약 취소시에 환불됩니다.
              </div>
            </div>
            <div>
              <div className="sub-title-2">유의사항</div>
              <ol className="list-decimal pl-4">
                <li>매튜와 만나면 반갑게 인사를 나눠주세요!</li>
                <li>매튜와 서로 서로 소중한 친구처럼 아껴주세요!</li>
                <li>여행 후에 리뷰는 잊지마세요!</li>
                <li>매튜와 함께 즐거운 여행 되세요!</li>
              </ol>
            </div>

            <div className="*:font-poppins text-signature text-4xl ">
              <span className="font-extralight ">Nice to </span>
              <span className="font-extrabold *:font-poppins ">
                Mat
                <span className="transform scale-x-[-1] ">t</span>
                <span>hew</span>
                <span className="font-extralight">!</span>
              </span>
            </div>
            <BottomButton
              buttons={[
                {
                  active: true,
                },
              ]}
            >
              <Payment
                text={`${content.price && content.price.toLocaleString()}원 결제하기`}
                mid={content.merchantUid}
                price={content.price}
                title={content.product.title}
              />
            </BottomButton>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};
export default ReservationPayView;
