import { Box, CircularProgress } from '@mui/material';
import { minContentHeight } from '@simple-checkout/ui';

export default function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: minContentHeight,
      }}
    >
      <CircularProgress />
    </Box>
  );
}
