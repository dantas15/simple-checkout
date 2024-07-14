'use client';

import { Button } from '@mui/material';
import {
  Success as SuccessComponent,
  MainContent,
} from '@simple-checkout/ui/components';
import { usePaymentContext } from '../../shared/hooks/usePaymentContext';

export default function Success() {
  const { clearData } = usePaymentContext();
  const handleGoBack = () => {
    clearData();
  };
  return (
    <MainContent alignCenter>
      <SuccessComponent
        goBackComponent={
          <Button variant="contained" color="primary" onClick={handleGoBack}>
            Efetuar novo pagamento
          </Button>
        }
      />
    </MainContent>
  );
}
