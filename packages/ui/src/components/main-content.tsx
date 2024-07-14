import { Box, BoxProps } from '@mui/material';
import { ReactNode } from 'react';
import { minContentHeight } from '../min-content-height';

type Props = {
  alignCenter?: boolean;
  children: ReactNode;
} & BoxProps;

const centerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export function MainContent({ children, alignCenter, sx, ...props }: Props) {
  const additionalStyles = alignCenter ? { ...centerStyles, ...sx } : sx;
  return (
    <Box
      py="2rem"
      component="main"
      {...props}
      sx={{
        ...additionalStyles,
        minHeight: minContentHeight,
      }}
    >
      {children}
    </Box>
  );
}
