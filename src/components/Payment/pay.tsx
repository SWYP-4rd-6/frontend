import { ChangeEvent } from 'react';
import type { PG, PaymentMethod } from '@/types/portone';

interface PropsType {
  onClickPayment: (pg: PG, storeId: string, payMethod: PaymentMethod) => void;
}

function PayView({ onClickPayment }: PropsType) {
  return (
    <div>
      <button
        id="cardPay"
        className="border bg-yellow-300"
        onClick={() =>
          onClickPayment('html5_inicis', `${import.meta.env.VITE_PORTONE_INI_MID}`, 'card')
        }
      >
        카드 결제
      </button>
    </div>
  );
}
export default PayView;
