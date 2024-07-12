import type { ButtonProps } from '@mui/material';
import { Button, CircularProgress } from '@mui/material';

type Props = {
  isLoading: boolean;
} & Partial<ButtonProps>;

export function SubmitButton({ isLoading, sx, ...props }: Props) {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      variant="contained"
      {...props}
      sx={{ textTransform: 'none', fontWeight: 500, ...sx }}
    >
      {props.children}
      {isLoading && (
        <CircularProgress
          size={24}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-12px',
            marginLeft: '-12px',
          }}
        />
      )}
    </Button>
  );
}
