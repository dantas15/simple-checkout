import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { minContentHeight } from '../min-content-height';

type Props = {
  children: ReactNode;
};

export function MainWrapper({ children }: Props) {
  return (
    <Container
      maxWidth="sm"
      sx={{
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <Header />
      <Box sx={{ width: '100%', minHeight: minContentHeight }}>{children}</Box>
      <Footer />
    </Container>
  );
}
