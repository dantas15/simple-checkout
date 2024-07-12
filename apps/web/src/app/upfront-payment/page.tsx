'use client';

import { useEffect } from 'react';
import { usePaymentContext } from '../../shared/hooks/usePaymentContext';
import { useRouter } from 'next/navigation';
import {
  MainContent,
  QRCode,
  SubmitButton,
} from '@simple-checkout/ui/components';
import { Stack, Typography } from '@mui/material';
import { ContentCopy } from '@mui/icons-material';
import { PaymentInfo } from '../credit-card-input/components/payment-info';

export default function UpfrontPayment() {
  const router = useRouter();
  const { user, amount, creditCard, isLoading } = usePaymentContext();

  useEffect(() => {
    if (!isLoading && (!user || !amount || !creditCard)) {
      if (!user) {
        router.replace('/');
      }
      if (!amount) {
        router.replace('/select-amount');
      }
      if (!creditCard) {
        router.replace('/credit-card-input');
      }
    }
  }, [user, amount, isLoading]);

  const name = user?.name;
  const amountToBepaid = (amount?.amount ?? 0) / 2;
  const amountLeft = (amount?.amount ?? 0) - amountToBepaid;

  const qrcodeUrl = `${amountToBepaid}`;
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(qrcodeUrl);
  };

  return (
    <MainContent>
      <Typography variant="h6" gutterBottom>
        {name}, pague a entrada de R${amountToBepaid} e escolha o restante no
        cartão!
      </Typography>

      <QRCode url={qrcodeUrl} />

      <Stack alignItems="center">
        <SubmitButton
          type="button"
          color="secondary"
          onClick={handleCopyClick}
          isLoading={isLoading}
        >
          Clique para copiar QR CODE <ContentCopy />
        </SubmitButton>
      </Stack>

      <PaymentInfo firstAmount={amountToBepaid} secondAmount={amountLeft} />
    </MainContent>
  );
}
