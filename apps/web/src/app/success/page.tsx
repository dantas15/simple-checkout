'use client';

import { Button, Stack } from '@mui/material';
import {
  Success as SuccessComponent,
  MainContent,
} from '@simple-checkout/ui/components';
import { usePaymentContext } from '../../shared/hooks/usePaymentContext';
import { useRouter } from 'next/navigation';
import { fallbackRoutesFromStatus } from '../../utils/fallback-routes';

export default function Success() {
  const router = useRouter();
  const { clearData, paymentStatus, creditCard } = usePaymentContext();

  if (
    paymentStatus !== '6-success' ||
    (paymentStatus === '6-success' && !creditCard)
  ) {
    router.replace(fallbackRoutesFromStatus['6-success']);
  }

  const handleOnClick = async () => {
    await clearData();
    router.push('/');
  };
  return (
    <MainContent alignCenter>
      <Stack alignItems="center" justifyContent="center">
        <SuccessComponent />
        <Button variant="contained" color="primary" onClick={handleOnClick}>
          Efetuar novo pagamento
        </Button>
      </Stack>
    </MainContent>
  );
}
