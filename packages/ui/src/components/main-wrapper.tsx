import { Container, SxProps, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import { ReactNode } from 'react';
import { Header } from './header';
import { Footer, footerHeight } from './footer';

type Props = {
  children: ReactNode;
  alignCenter?: boolean;
};

const centerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const wooviLogoSize = '2.3125rem'; // 37px (from figma :/)
const paddingFromContainer = '2rem';
const minContentHeight = `calc(100vh - (${footerHeight}px + ${wooviLogoSize} + ${paddingFromContainer}))`;

export function MainWrapper({ children, alignCenter }: Props) {
  const contentStyles: SxProps<Theme> | undefined = alignCenter
    ? { ...centerStyles }
    : undefined;

  return (
    <Container
      maxWidth="sm"
      sx={{
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{ ...contentStyles, width: '100%', minHeight: minContentHeight }}
      >
        {children}
      </Box>
      <Footer />
    </Container>
  );
}
