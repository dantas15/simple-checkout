import { Box, Chip, styled } from '@mui/material';
import { ReactNode } from 'react';

const PixWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));
const PixHeader = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: -16,
  left: 16,
  fontSize: 20,
  fontWeight: 'bold',
  background: theme.palette.grey[300],
}));

type Props = {
  children: ReactNode;
  label: string;
};

export function SelectPixWrapper({ children, label }: Props) {
  return (
    <PixWrapper>
      {children}
      <PixHeader label={label} />
    </PixWrapper>
  );
}
