'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from '@mui/icons-material';
import {
  Box,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { MainWrapper, SubmitButton } from '@simple-checkout/ui/components';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const amountSchema = z.object({
  amount: z.coerce
    .number({ message: 'A quantidade deve ser um número' })
    .int({ message: 'A quantidade deve ser um número inteiro' })
    .min(1, { message: 'A quantidade deve ser maior ou igual a 1' }),
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof amountSchema>>({
    resolver: zodResolver(amountSchema),
  });

  const handleOnSubmit = async (data: z.infer<typeof amountSchema>) => {
    setIsLoading(true);
    setTimeout(() => {
      alert(data.amount);
      router.push('/credit-card-input');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <MainWrapper alignCenter>
      <form onSubmit={form.handleSubmit(handleOnSubmit)}>
        <Typography variant="h4" gutterBottom>
          Quanto você vai pagar?
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl>
            <TextField
              {...form.register('amount')}
              error={!!form.formState.errors.amount}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              helperText={form.formState.errors.amount?.message}
              placeholder="0.0"
            />
          </FormControl>
          <SubmitButton startIcon={<Send />} isLoading={isLoading}>
            Enviar
          </SubmitButton>
        </Box>
      </form>
    </MainWrapper>
  );
}
