import { ChangeEvent } from 'react';
import type { PG, PaymentMethod } from '@/types/portone';

interface PropsType {
  onClickPayment: (pg: PG, storeId: string, payMethod: PaymentMethod) => void;
}

function PayView({ onClickPayment }: PropsType) {
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
      </main>
    </div>
  );
}
export default PayView;
