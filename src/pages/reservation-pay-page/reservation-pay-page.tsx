import { ChangeEvent } from 'react';
import type { PG, PaymentMethod } from '@/types/portone';
import Payment from '@/components/Payment';
import Header from '@/components/Header/Header';
import { MaterialSymbol } from 'react-material-symbols';
import { CategoryType, GuideProductType, ReservationType, ReviewType } from '@/types/common';
import { calculateDays, formatDateKor, formatTimeRange, getTagNameKor } from '@/utils';
import BottomButton from '@/components/Button/BottomButton';
('@/utils');
interface PropsType {
  onComplete: () => void;
  content: ReservationType;
}

const ReservationPayView = ({ onComplete, content }: PropsType) => {
  return (
    <>
      <Header />
      <div className="px-4">
        <div className="text-2xl font-bold mb-4">예약을 위해서는 결제가 필요해요!</div>
        <div>
          <div>
            <div className="text-lg font-bold mb-2">여행 상품</div>

            <div className="mb-4 border">
              <img src={content.product.thumb} />

              <div className="font-bold text-lg">{content.product.title}</div>
              <div className="text-gray-500">
                {content.product.categories?.map((item: CategoryType, i: number) => (
                  <span key={i}>#{getTagNameKor(item)}</span>
                ))}
              </div>
              <MaterialSymbol icon="fmd_good" size={19} fill grade={-25} color="" />
              <div>{content.product.locationName}</div>
            </div>
            <div className="text-lg font-bold mb-2">예약 정보</div>

            <div>
              <div className="font-bold">날짜</div>
              <div>
                {formatDateKor(content.guideStart)} (
                {calculateDays(content.guideStart, content.guideEnd)}일)
              </div>
            </div>
            <div>
              <div className="font-bold">예약 시간</div>
              <div>{formatTimeRange(content.guideStart, content.guideEnd)}</div>
            </div>
            <div>
              <div className="font-bold">결제 금액</div>
              <div className="text-lg font-bold">{content.price.toLocaleString()}원</div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="font-bold mb-2">활동 정책</div>
          <div>
            이 예약은 결제일 기준 3일이내 예약 미확정 또는 가이드의 예약 취소시에 환불됩니다.
          </div>
          <div className="font-bold mt-4 mb-2">유의사항</div>
          <ol className="list-decimal pl-4">
            <li>매튜와 만나면 반갑게 인사를 나눠주세요!</li>
            <li>매튜와 서로 서로 소중한 친구처럼 아껴주세요!</li>
            <li>여행 후에 리뷰는 잊지마세요!</li>
            <li>매튜와 함께 즐거운 여행 되세요!</li>
          </ol>
        </div>

        <div className="text-sm mt-2">Nice to Matthew!</div>
      </div>
      <BottomButton
        buttons={[
          {
            onClick: onComplete,
            active: true,
          },
        ]}
      >
        <Payment text={`${content.price.toLocaleString()}원 결제하기`} />
      </BottomButton>
    </>
  );
};
export default ReservationPayView;
