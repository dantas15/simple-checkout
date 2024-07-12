import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { minContentHeight } from '../min-content-height';

type Props = {
  alignCenter?: boolean;
  children: ReactNode;
};

const centerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export function MainContent({ children, alignCenter }: Props) {
  const additionalStyles = alignCenter ? centerStyles : undefined;
  return (
    <Box
      component="main"
      sx={{
        ...additionalStyles,
        minHeight: minContentHeight,
      }}
    >
      {children}
    </Box>
  );
}
