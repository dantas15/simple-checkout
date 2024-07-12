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
import { MainContent, SubmitButton } from '@simple-checkout/ui/components';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { type User, userSchema } from '../shared/schemas/user-schema';
import { useStorage } from '../shared/hooks/useStorage';

export default function Home() {
  const { setUser } = useStorage();
  const router = useRouter();

  const form = useForm<User>({
    resolver: zodResolver(userSchema),
  });

  const handleOnSubmit = async (data: User) => {
    setTimeout(() => {
      setUser(data);
      router.push('/select-amount');
    }, 1000);
  };
  return (
    <MainContent alignCenter>
      <Box component="form" onSubmit={form.handleSubmit(handleOnSubmit)}>
        <Typography textAlign="center" variant="h4" gutterBottom>
          Qual seu nome?
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            {...form.register('name')}
            error={!!form.formState.errors.name}
            helperText={form.formState.errors.name?.message}
          />
          <SubmitButton startIcon={<Send />} isLoading={false}>
            Enviar
          </SubmitButton>
        </Box>
      </Box>
    </MainContent>
  );
}
