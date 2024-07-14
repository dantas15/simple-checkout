'use client';

import { Button, Stack } from '@mui/material';
import {
  Success as SuccessComponent,
  MainContent,
} from '@simple-checkout/ui/components';
import { usePaymentContext } from '../../shared/hooks/usePaymentContext';

export default function Success() {
  const { clearData } = usePaymentContext();
  const handleOnClick = () => {
    clearData();
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
