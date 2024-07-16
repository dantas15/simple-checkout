'use client';

import { Grid, Stack, TextField, Typography } from '@mui/material';
import { SubmitButton } from '@simple-checkout/ui/components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import {
  type CreditCard as CreditCardType,
  creditCardSchema,
} from '@simple-checkout/schemas';
import { usePaymentContext } from '../../../shared/hooks/usePaymentContext';
import { SelectInstallments } from './components/select-installments';
import { useRouter } from 'next/navigation';
import { fallbackRoutesFromStatus } from '../../../utils/fallback-routes';
import { useState } from 'react';

type Installment = {
  value: number;
  label: string;
};
const fetchMockInstallments = (transactionAmount: number): Installment[] => {
  const mockInstallments: Installment[] = [];
  const mockFee = 0.05;
  for (let i = 0; i < 12; i++) {
    const installmentQuantity = i + 1;
    const totalWithFees = transactionAmount + i * mockFee * transactionAmount;
    const installmentValue = totalWithFees / installmentQuantity;
    mockInstallments.push({
      value: installmentQuantity,
      label: `Parcele em ${installmentQuantity}x de ${installmentValue.toFixed(2)} (total: ${totalWithFees})`,
    });
  }
  return mockInstallments;
};

export default function CreditCard() {
  const router = useRouter();

  const [isFormLoading, setIsFormLoading] = useState(false);

  const {
    user,
    amount,
    isPaymentLoading,
    paymentStatus,
    creditCard,
    updateCreditCard,
  } = usePaymentContext();

  const form = useForm<CreditCardType>({
    resolver: zodResolver(creditCardSchema),
    defaultValues: {
      selectedInstallment: 1,
    },
  });

  if (
    (!isPaymentLoading && paymentStatus !== '5-pix-confirmed') ||
    (paymentStatus === '6-success' && !creditCard)
  ) {
    router.replace(fallbackRoutesFromStatus['5-pix-confirmed']);
  }

  const name = user?.name ?? '';
  const amountInCents = amount?.amount ?? 0;

  const handleOnSubmit = async (data: CreditCardType) => {
    setIsFormLoading(true);
    await updateCreditCard(data);
    setIsFormLoading(false);
    router.push('/success');
  };

  const availableInstallments = fetchMockInstallments(amountInCents);

  return (
    <>
      <Typography textAlign="center" variant="h6" gutterBottom>
        {name}, pague a entrada e escolha o restante no cartão!
      </Typography>
      <Stack
        component="form"
        onSubmit={form.handleSubmit(handleOnSubmit)}
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
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <DatePicker
              sx={{ width: '100%' }}
              {...form.register('dueDate')}
              views={['year', 'month']}
              label="Vencimento"
              minDate={dayjs()}
              onChange={(value) => form.setValue('dueDate', value ?? undefined)}
              slots={{ textField: TextField }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              {...form.register('securityNumber')}
              label="CVV"
              error={!!form.formState.errors.securityNumber}
              helperText={form.formState.errors.securityNumber?.message}
            />
          </Grid>
        </Grid>

        <SelectInstallments
          form={form}
          installmentOptions={availableInstallments}
        />
        <SubmitButton color="secondary" fullWidth isLoading={isFormLoading}>
          Pagar
        </SubmitButton>
      </Stack>
    </>
  );
}
