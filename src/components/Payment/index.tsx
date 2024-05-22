import type { RequestPayParams, RequestPayResponse, PG, PaymentMethod } from '@/types/portone';
import PaymentView from './payment';
import { GuideType, UserType } from '@/types/common';
import { useUserInfoStore } from '@/store/UserInfoStore';

interface PropsType {
  text: string;
  mid: string;
  price: number;
  title: string;
  buyer: GuideType;
}

const Payment = ({ text, mid, price, title, buyer }: PropsType) => {
  const { user, changeState } = useUserInfoStore();

  const onClickPayment = (pg: PG, storeId: string, payMethod: PaymentMethod) => {
    if (price === 0) return;
    if (!window.IMP) return;
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init(import.meta.env.VITE_PORTONE_IMP_KEY);

    /* 2. 결제 데이터 정의하기 */
    const data: RequestPayParams = {
      pg: `${pg}.${storeId}`, // PG사 : https://developers.portone.io/docs/ko/tip/pg-2 참고
      pay_method: payMethod, // 결제수단
      merchant_uid: `mid_${mid}`, // 주문번호
      amount: price, // 결제금액
      name: title, // 주문명
      buyer_name: user.nickname, // 구매자 이름
      buyer_tel: user.phone, // 구매자 전화번호
      buyer_email: user.email, // 구매자 이메일
      buyer_addr: user.location, // 구매자 주소
      // buyer_postcode: user., // 구매자 우편번호
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  };

  /* 3. 콜백 함수 정의하기 */
  function callback(response: RequestPayResponse) {
    const { success, error_msg, imp_uid, merchant_uid } = response;

    if (success) {
      alert('결제 성공');
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  return <PaymentView text={text} onClickPayment={onClickPayment} />;
};
export default Payment;
