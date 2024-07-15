'use client';

import {
  MainContent,
  PixStallmentOptionType,
  SelectPixPaymentForm,
} from '@simple-checkout/ui/components';
import { usePaymentContext } from '../../shared/hooks/usePaymentContext';
import {
  PixPreference,
  pixPreferenceSchema,
} from '../../shared/schemas/pix-preference-schema';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const fetchMockPixInstallments = (
  transactionAmount: number
): PixStallmentOptionType[] => {
  const mockInstallments: PixStallmentOptionType[] = [];
  const mockFee = 0.05;
  for (let i = 2; i <= 7; i++) {
    const installmentQuantity = i;
    const totalWithFees = transactionAmount + i * mockFee * transactionAmount;
    const installmentValue = totalWithFees / installmentQuantity;
    mockInstallments.push({
      value: installmentQuantity.toString(),
      label: `${installmentQuantity}x de R$${installmentValue.toFixed(2)}`,
      total: totalWithFees,
      discount: i === 3 ? 3 : undefined,
    });
  }
  return mockInstallments;
};

export default function SelectPix() {
  const router = useRouter();

  const [selectValue, setSelectValue] = useState<PixPreference>('0');
  const [isFormValid, setIsFormValid] = useState(false);

  const {
    user,
    updatePixPreferences,
    amount: amountFromContext,
  } = usePaymentContext();

  const handleOnSubmit = async (
    event: React.FormEvent | React.MouseEventHandler<HTMLButtonElement>
  ) => {
    if ('preventDefault' in event) {
      event.preventDefault();
    }
    const validData = pixPreferenceSchema.safeParse(selectValue);
    if (!validData.success) {
      console.log(validData.error);
      return;
    }
    await updatePixPreferences(validData.data);
    router.push('/payment/pix');
  };
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validData = pixPreferenceSchema.safeParse(event.target.value);
    if (!validData.success) {
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);

    setSelectValue(validData.data);
  };

  const name = user?.name ?? '';
  const amount = amountFromContext?.amount ?? 0;

  const pixStallmentOptions = fetchMockPixInstallments(amount);

  return (
    <MainContent>
      <SelectPixPaymentForm
        userName={name}
        amount={amount}
        handleOnSubmit={handleOnSubmit}
        isFormValid={isFormValid}
        handleOnChange={handleOnChange}
        pixStallmentOptions={pixStallmentOptions}
        selectValue={selectValue}
      />
    </MainContent>
  );
}
