'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from '@mui/icons-material';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import { MainContent, SubmitButton } from '@simple-checkout/ui/components';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { amountSchema, type Amount } from '../../shared/schemas/amount-schema';
import { useStorage } from '../../shared/hooks/useStorage';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<Amount>({
    resolver: zodResolver(amountSchema),
  });

  const { getUser } = useStorage();

  const handleOnSubmit = async (data: Amount) => {
    setIsLoading(true);
    setTimeout(() => {
      alert(data.amount);
      router.push('/credit-card-input');
      setIsLoading(false);
    }, 1000);
  };

  const name = getUser().name;

  return (
    <MainContent alignCenter>
      <Box component="form" onSubmit={form.handleSubmit(handleOnSubmit)}>
        <Typography textAlign="center" variant="h4" gutterBottom>
          Quanto você vai pagar, {name}?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
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
          <SubmitButton startIcon={<Send />} isLoading={isLoading}>
            Enviar
          </SubmitButton>
        </Box>
      </Box>
    </MainContent>
  );
}
