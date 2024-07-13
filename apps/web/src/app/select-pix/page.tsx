'use client';

import { usePaymentContext } from '../../shared/hooks/usePaymentContext';

export default function SelectPix() {
  const { updatePixPreferences } = usePaymentContext();
  return (
    <div>
      <button onClick={() => updatePixPreferences({ paymentType: 1 })}>
        Instant
      </button>
    </div>
  );
}
