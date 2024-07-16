import { Container } from '@mui/material';
import { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { ScreenHeightStack } from './screen-height-stack';

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
      <ScreenHeightStack>{children}</ScreenHeightStack>
      <Footer />
    </Container>
  );
}
