'use client';

import { Button, Stack } from '@mui/material';
import {
  Success as SuccessComponent,
  MainContent,
} from '@simple-checkout/ui/components';
import { usePaymentContext } from '../../shared/hooks/usePaymentContext';
import { isBrowser } from '../../utils/isBrowser';

export default function Success() {
  const { clearData } = usePaymentContext();
  const handleOnClick = () => {
    clearData();
    if (isBrowser()) {
      window.history.replaceState(null, '', '/');
    }
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
