import { ChangeEvent } from 'react';
import type { PG, PaymentMethod } from '@/types/portone';

interface PropsType {
  onClickPayment: (pg: PG, storeId: string, payMethod: PaymentMethod) => void;
  text: string;
}

function PaymentView({ onClickPayment, text }: PropsType) {
  return (
    <div
      id="cardPay"
      className="  text-signature text-xl font-black"
      onClick={() => {
        // onClickPayment('html5_inicis', `${import.meta.env.VITE_PORTONE_INI_MID}`, 'card')
      }}
    >
      {text}
    </div>
  );
}
export default PaymentView;
