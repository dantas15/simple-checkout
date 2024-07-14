import { Box } from '@mui/material';
import { WooviLogo } from './woovi-logo';

export function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <WooviLogo />
    </Box>
  );
}
