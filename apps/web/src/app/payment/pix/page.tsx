'use client';

import { usePaymentContext } from '../../../shared/hooks/usePaymentContext';
import { QRCode, SubmitButton } from '@simple-checkout/ui/components';
import { Stack, Typography } from '@mui/material';
import { ContentCopy } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { fallbackRoutesFromStatus } from '../../../utils/fallback-routes';

export default function Pix() {
  const router = useRouter();
  const { user, amount, isPaymentLoading, updatePixPayment } =
    usePaymentContext();

  if (!isPaymentLoading && (!user || !amount)) {
    router.replace(fallbackRoutesFromStatus['4-pix-type-selected']);
  }

  const name = user?.name;
  const amountToBepaid = (amount?.amount ?? 0) / 2;

  const qrcodeUrl = `${amountToBepaid}`;
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(qrcodeUrl);
    await updatePixPayment();
    router.push('/payment/credit-card');
  };

  return (
    <>
      <Typography variant="h6" textAlign="center" gutterBottom>
        {name}, pague a entrada de R${amountToBepaid} e escolha o restante no
        cartão!
      </Typography>

      <QRCode url={qrcodeUrl} />

      <Stack alignItems="center">
        <SubmitButton
          type="button"
          color="secondary"
          onClick={handleCopyClick}
          isLoading={isPaymentLoading}
        >
          Clique para copiar QR CODE <ContentCopy sx={{ ml: 2 }} />
        </SubmitButton>
      </Stack>
    </>
  );
}
