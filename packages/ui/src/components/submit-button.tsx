import { Send } from '@mui/icons-material';
import type { ButtonProps } from '@mui/material';
import { Button, CircularProgress } from '@mui/material';

type Props = {
  isLoading: boolean;
} & Partial<ButtonProps>;

export function SubmitButton({ isLoading, ...props }: Props) {
  return (
    <Button type="submit" disabled={isLoading} variant="contained" {...props}>
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
