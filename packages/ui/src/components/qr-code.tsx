'use client';

import { Box, Stack } from '@mui/material';
import { useQRCode } from 'next-qrcode';
import { primaryColor } from '../theme';

type Props = {
  url: string;
};

export function QRCode({ url }: Props) {
  const { Canvas } = useQRCode();

  return (
    <Stack my={4} alignItems="center">
      <Box
        sx={{
          border: '1px solid',
          color: primaryColor,
          borderRadius: 2,
          padding: 0.2,
          width: 'fit-content',
          height: 'fit-content',
        }}
      >
        <Canvas
          text={url}
          options={{
            errorCorrectionLevel: 'M',
            scale: 4,
            width: 200,
          }}
        />
      </Box>
    </Stack>
  );
}
