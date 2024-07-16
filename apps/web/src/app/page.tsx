'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from '@mui/icons-material';
import { Box, TextField, Typography } from '@mui/material';
import { MainContent, SubmitButton } from '@simple-checkout/ui/components';
import { useForm } from 'react-hook-form';
import { type User, userSchema } from '@simple-checkout/schemas';
import { usePaymentContext } from '../shared/hooks/usePaymentContext';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { updateUser } = usePaymentContext();

  const form = useForm<User>({
    resolver: zodResolver(userSchema),
  });

  const handleOnSubmit = async (data: User) => {
    await updateUser(data);
    router.push('/amount');
  };

  return (
    <MainContent alignCenter>
      <Box component="form" onSubmit={form.handleSubmit(handleOnSubmit)}>
        <Typography textAlign="center" variant="h4" gutterBottom>
          Qual seu nome?
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
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
