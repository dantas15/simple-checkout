import {
  FabProps as MaterialFabProps,
  Fab as MaterialFab,
} from '@mui/material';

type Props = MaterialFabProps;

export function Fab(props: Props) {
  return (
    <MaterialFab
      sx={{
        position: 'fixed',
        bottom: 12,
        right: 32,
      }}
      color="primary"
      aria-label="submit"
      {...props}
    >
      {props.children}
    </MaterialFab>
  );
}
