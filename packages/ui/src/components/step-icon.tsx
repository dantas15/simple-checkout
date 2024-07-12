'use client';

import { StepIconProps, styled } from '@mui/material';
import { muteColor, primaryColor } from '../theme';
import { Check, LensOutlined } from '@mui/icons-material';

const CustomStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : muteColor,
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: primaryColor,
    }),
    fontSize: 18,
  })
);

export function StepIcon({ active, completed, className }: StepIconProps) {
  return (
    <CustomStepIconRoot ownerState={{ active }} className={className}>
      {completed ? <Check /> : <LensOutlined />}
    </CustomStepIconRoot>
  );
}
