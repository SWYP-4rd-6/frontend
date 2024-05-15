import { ChangeEvent } from 'react';
import type { PG, PaymentMethod } from '@/types/portone';
import Payment from '@/components/Payment';

function PayView() {
  return (
    <div>
      <Payment />
    </div>
  );
}
export default PayView;
