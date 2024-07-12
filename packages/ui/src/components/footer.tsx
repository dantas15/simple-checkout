import { VerifiedUser } from '@mui/icons-material';
import { WooviLogo } from './woovi-logo';
import { Box, Typography } from '@mui/material';
import { muteColor } from '../theme';

export const footerHeight = 24;

export function Footer() {
  return (
    <Box
      sx={{
        height: footerHeight,
        width: '100%',
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'center',
        color: muteColor,
      }}
    >
      <VerifiedUser fontSize="medium" />
      <Typography
        sx={{
          fontSize: 14,
        }}
      >
        Pagamento 100% seguro via{' '}
      </Typography>
      <WooviLogo omitColors size={0.5} />
    </Box>
  );
}
