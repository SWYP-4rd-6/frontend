import type { RequestPayParams, RequestPayResponse, PG, PaymentMethod } from '@/types/portone';
import PayView from './pay';

function Payment() {
  const onClickPayment = (pg: PG, storeId: string, payMethod: PaymentMethod) => {
    if (!window.IMP) return;
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init(import.meta.env.VITE_PORTONE_IMP_KEY);

    /* 2. 결제 데이터 정의하기 */
    const data: RequestPayParams = {
      pg: `${pg}.${storeId}`, // PG사 : https://developers.portone.io/docs/ko/tip/pg-2 참고
      pay_method: payMethod, // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 100, // 결제금액
      name: '서울 여행', // 주문명
      buyer_name: '홍길동', // 구매자 이름
      buyer_tel: '01012345678', // 구매자 전화번호
      buyer_email: 'jewallk@gmail.com', // 구매자 이메일
      buyer_addr: '신사동 661-16', // 구매자 주소
      buyer_postcode: '06018', // 구매자 우편번호
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

  return <PayView onClickPayment={onClickPayment} />;
}
export default Payment;
