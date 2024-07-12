'use client';

import { ReactNode } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/pt-br';
import { PaymentProvider } from '../shared/contexts/payment-context';

type Props = {
  children: ReactNode;
};
export function ClientProviders({ children }: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <PaymentProvider>{children}</PaymentProvider>
    </LocalizationProvider>
  );
}
