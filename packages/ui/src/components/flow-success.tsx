import { Box, Typography, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { ReactNode } from 'react';

type Props = {
  goBackComponent: ReactNode;
};

export function Success({ goBackComponent }: Props) {
  return (
    <Stack alignItems="center" justifyContent="center">
      <Box
        sx={{
          mb: 4,
        }}
      >
        <CheckCircle
          sx={{
            fontSize: '10rem',
            color: 'green',
          }}
        />
      </Box>
      <Typography variant="h4" gutterBottom mb={2}>
        Pagamento confirmado!
      </Typography>
      {goBackComponent}
    </Stack>
  );
}
