import Box from '@mui/material/Box';
import { ReactNode } from 'react';

export function MainWrapper({ children }: { children: ReactNode }) {
  return (
    <Box component="main" sx={{ background: 'red' }}>
      {children}
    </Box>
  );
}
