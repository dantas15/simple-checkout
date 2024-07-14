import { Theme } from '@mui/material';

export function getPaperOrPrimaryWithOpacityBackground(
  theme: Theme,
  useOpacity?: boolean
) {
  if (useOpacity) {
    return `${theme.palette.primary.main}25`;
  }
  return theme.palette.background.paper;
}
