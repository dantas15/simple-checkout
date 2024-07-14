import { Box, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

export function Success() {
  return (
    <>
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
    </>
  );
}
