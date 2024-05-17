import { ChangeEvent } from 'react';
import type { PG, PaymentMethod } from '@/types/portone';
import Payment from '@/components/Payment';
import Header from '@/components/Header/Header';
import { MaterialSymbol } from 'react-material-symbols';
interface PropsType {
  onComplete: () => void;
}

const PayView = ({ onComplete }: PropsType) => {
  return (
    <>
      <Header />
      <div className="p-4">
        <div className="text-2xl font-bold mb-4">예약을 위해서는 결제가 필요해요!</div>
        <div>
          <div>
            <div className="text-lg font-bold mb-2">상품명</div>

            <div className="mb-4 border">
              <img src="/trip_image_sample2.png" />

              <div className="font-bold text-lg">경북궁의 밤</div>
              <div className="text-gray-500">#가례국악 #가례대고리</div>
              <MaterialSymbol icon="fmd_good" size={19} fill grade={-25} color="" />
              <div>위치</div>
            </div>
            <div className="text-lg font-bold mb-2">예약 정보</div>

            <div>
              <div className="font-bold">날짜</div>
              <div>2024년 5월 17일 (1일)</div>
            </div>
            <div>
              <div className="font-bold">예약 시간</div>
              <div>10:00 - 12:00 (2시간)</div>
            </div>
            <div>
              <div className="font-bold">결제 금액</div>
              <div className="text-lg font-bold">20,000원</div>
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

        <div
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
          onClick={onComplete}
        >
          <Payment text="20000원 결제하기" />
        </div>
      </div>
    </>
  );
};
export default PayView;
