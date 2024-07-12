import { Send } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { MainWrapper } from '@simple-checkout/ui/components';

export default function Home() {
  const error = false;
  const helperText = error ? 'error!' : '';

  return (
    <MainWrapper alignCenter>
      <form>
        <Typography variant="h4" gutterBottom>
          Quanto você vai pagar?
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl>
            <TextField
              id="amount"
              error={error}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              helperText={helperText}
              placeholder="0.0"
            />
          </FormControl>
          <Button
            type="submit"
            disabled={true}
            variant="contained"
            startIcon={<Send />}
          >
            Enviar
          </Button>
        </Box>
      </form>
    </MainWrapper>
  );
}
