'use client';

import { ReactNode } from 'react';
import { usePaymentContext } from '../../shared/hooks/usePaymentContext';
import Loading from '../loading';
import { useRouter } from 'next/navigation';
import { isBrowser } from '../../utils/isBrowser';

type Props = {
  children: ReactNode;
};

export default function SuccessLayout({ children }: Props) {
  const router = useRouter();
  const { paymentStatus } = usePaymentContext();

  if (!isBrowser()) {
    return <Loading />;
  }

  if (paymentStatus === 'pending') {
    return <Loading />;
  }

  if (paymentStatus !== '6-success') {
    return router.back();
  }

  return <>{children}</>;
}
