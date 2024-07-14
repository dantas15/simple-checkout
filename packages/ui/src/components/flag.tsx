import { Box, styled } from '@mui/material';
import { ReactNode } from 'react';
import { getPaperOrPrimaryWithOpacityBackground } from '../utils/getPaperOrPrimaryWithOpacityBackground';

type Props = {
  children: ReactNode;
  isSelected: boolean;
};

const FlagWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: '#fff',
  padding: '4px 8px',
  borderRadius: '4px',
  marginTop: theme.spacing(2),
  display: 'inline-block',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
}));

const WhiteFlagBackground = styled(Box)(({ theme }) => ({
  width: 22,
  height: 22,
  borderRadius: 2,
  background: theme.palette.background.paper,
  position: 'absolute',
  top: '50%',
  right: -12,
  transform: 'translateY(-50%) rotate(45deg)',
}));
const GreenFlag = styled(Box)(({ theme }) => ({
  width: 22,
  height: 22,
  borderRadius: 2,
  background: getPaperOrPrimaryWithOpacityBackground(theme, true),
  position: 'absolute',
  top: '50%',
  right: -12,
  transform: 'translateY(-50%) rotate(45deg)',
}));

export function Flag({ children, isSelected }: Props) {
  return (
    <FlagWrapper>
      {children}
      <WhiteFlagBackground />
      {isSelected && <GreenFlag />}
    </FlagWrapper>
  );
}
