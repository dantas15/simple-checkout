import { ReactNode } from 'react';
import { Box, Stack, StackProps } from '@mui/material';
import { footerHeight } from './footer';

const wooviLogoSize = '2.3125rem'; // 37px (from figma :/)
const paddingFromHeaderContentAndFooter = '4rem';
const minContentHeight = `calc(100vh - (${footerHeight}px + ${wooviLogoSize} + ${paddingFromHeaderContentAndFooter}))`;

type Props = { asBox?: true; children: ReactNode } & StackProps;

export function ScreenHeightStack({ sx, asBox, ...props }: Props) {
  const styles = {
    ...sx,
    width: '100%',
    minHeight: minContentHeight,
  };

  return asBox ? (
    <Box {...props} sx={styles} />
  ) : (
    <Stack {...props} sx={styles} />
  );
}
