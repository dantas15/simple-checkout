'use client';

import { usePaymentContext } from '../../../shared/hooks/usePaymentContext';
import { QRCode, SubmitButton } from '@simple-checkout/ui/components';
import { Stack, Typography } from '@mui/material';
import { ContentCopy } from '@mui/icons-material';

export default function Pix() {
  const { user, amount, isLoading, updatePixPayment } = usePaymentContext();

  const name = user?.name;
  const amountToBepaid = (amount?.amount ?? 0) / 2;

  const qrcodeUrl = `${amountToBepaid}`;
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(qrcodeUrl);
    await updatePixPayment();
  };

  return (
    <>
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
    </>
  );
}
