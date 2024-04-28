import { ChangeEvent } from 'react';
import type { PG, PaymentMethod } from '@/types/portone';

interface PropsType {
  onClickPayment: (pg: PG, storeId: string, payMethod: PaymentMethod) => void;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: number;
}

function PayView({ onClickPayment, onInputChange, value }: PropsType) {
  return (
    <div>
      <main className="flex min-h-screen flex-col p-24">
        <h1>KG 이니시스</h1>
        <button
          id="cardPay"
          className="border bg-yellow-300"
          onClick={() =>
            onClickPayment('html5_inicis', `${import.meta.env.VITE_PORTONE_INI_MID}`, 'card')
          }
        >
          카드 결제
        </button>
        <h1 className="mt-10">페이팔</h1>
        <h2>amount: </h2>
        <input
          type="text"
          placeholder="value"
          value={value}
          onChange={onInputChange}
          className="mb-4 w-[200px] border"
        />

        <div className="portone-ui-container" data-portone-ui-type="paypal-spb">
          {/* <!-- 페이팔 버튼이 생성됩니다. --> */}
        </div>
      </main>
    </div>
  );
}
export default PayView;
