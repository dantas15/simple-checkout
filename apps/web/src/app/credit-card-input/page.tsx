'use client';

import { Stack, TextField, Typography } from '@mui/material';
import { MainContent, SubmitButton } from '@simple-checkout/ui/components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import {
  CreditCard,
  creditCardSchema,
} from '../../shared/schemas/credit-card-schema';
import { useStorage } from '../../shared/hooks/useStorage';
import { PaymentInfo } from './components/payment-info';

export default function CreditCardInput() {
  const form = useForm<CreditCard>({
    resolver: zodResolver(creditCardSchema),
  });

  const { getUser } = useStorage();
  const name = getUser().name;

  return (
    <MainContent>
      <Typography textAlign="center" variant="h6" gutterBottom>
        {name}, pague a entrada e escolha o restante no cartão!
      </Typography>
      <Stack
        component="form"
        onSubmit={form.handleSubmit((data) => console.log(data))}
        gap={2}
      >
        <TextField
          {...form.register('fullName')}
          label="Nome completo"
          error={!!form.formState.errors.fullName}
          helperText={form.formState.errors.fullName?.message}
        />
        <TextField
          {...form.register('document')}
          label="CPF"
          error={!!form.formState.errors.document}
          helperText={form.formState.errors.document?.message}
        />
        <TextField
          {...form.register('creditCard')}
          label="Número do cartão"
          error={!!form.formState.errors.creditCard}
          helperText={form.formState.errors.creditCard?.message}
        />
        <Stack direction="row" justifyContent="space-between" gap={2}>
          <DatePicker
            {...form.register('dueDate')}
            views={['year', 'month']}
            label="Vencimento"
            minDate={dayjs()}
            onChange={(value) => form.setValue('dueDate', value ?? undefined)}
            slots={{ textField: TextField }}
          />
          <TextField
            {...form.register('securityNumber')}
            label="CVV"
            error={!!form.formState.errors.securityNumber}
            helperText={form.formState.errors.securityNumber?.message}
          />
        </Stack>
        <SubmitButton color="secondary" fullWidth isLoading={false}>
          Pagar
        </SubmitButton>
      </Stack>
      <PaymentInfo />
    </MainContent>
  );
}
