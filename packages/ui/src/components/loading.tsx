import { CircularProgress } from '@mui/material';
import { ScreenHeightStack } from './screen-height-stack';

export function Loading() {
  return (
    <ScreenHeightStack justifyContent="center" alignItems="center">
      <CircularProgress />
    </ScreenHeightStack>
  );
}
