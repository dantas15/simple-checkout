'use client';

import { createContext, ReactNode, useEffect, useState } from 'react';
import { userSchema, type User } from '../schemas/user-schema';
import { amountSchema, type Amount } from '../schemas/amount-schema';
import {
  creditCardSchema,
  type CreditCard,
} from '../schemas/credit-card-schema';
import { useRouter } from 'next/navigation';
import type { PaymentStatus } from '../schemas/payment-status-schema';
import { PixPreference } from '../schemas/pix-preference-schema';

type Nullable<T> = T | null | undefined;

export type PaymentContextType = {
  paymentStatus: PaymentStatus;
  user: Nullable<User>;
  updateUser: (data: User) => Promise<void>;
  amount: Nullable<Amount>;
  updateAmount: (data: Amount) => Promise<void>;
  creditCard: Nullable<CreditCard>;
  updateCreditCard: (data: CreditCard) => Promise<void>;
  pixPreference: Nullable<PixPreference>;
  updatePixPreferences: (data: PixPreference) => Promise<void>;
  updatePixPayment: () => Promise<void>;
  isLoading: boolean;
};

export const PaymentContext = createContext<PaymentContextType | undefined>(
  undefined
);

type PaymentProviderProps = {
  children: ReactNode;
};

export function PaymentProvider({ children }: PaymentProviderProps) {
  const router = useRouter();

  const [user, setUser] = useState<Nullable<User>>(null);
  const [amount, setAmount] = useState<Nullable<Amount>>(null);
  const [creditCard, setCreditCard] = useState<Nullable<CreditCard>>(null);
  const [pixPreference, setPixPreference] =
    useState<Nullable<PixPreference>>(null);
  const [paymentStatus, setPaymentStatus] =
    useState<PaymentStatus>('1-missing-all-info');

  const updatePaymentStatus = (
    newStatus: PaymentStatus,
    redirectTo?: string
  ) => {
    setPaymentStatus(newStatus);
    if (redirectTo) {
      router.push(redirectTo);
    }
  };

  const updateUser = async (data: User) => {
    setPaymentStatus('pending');
    setUser(data);
    updatePaymentStatus('2-user-specified');
  };
  const updateAmount = async (data: Amount) => {
    setPaymentStatus('pending');
    setAmount(data);
    updatePaymentStatus('3-amount-specified');
  };
  const updatePixPreferences = async (data: PixPreference) => {
    setPixPreference(data);
    setPaymentStatus('pending');
    updatePaymentStatus('4-pix-type-selected');
  };
  const updatePixPayment = async () => {
    setPaymentStatus('pending');
    updatePaymentStatus('5-pix-confirmed');
  };
  const updateCreditCard = async (data: CreditCard) => {
    setPaymentStatus('pending');
    setCreditCard(data);
    updatePaymentStatus('6-success');
  };

  useEffect(() => {
    if (paymentStatus === '1-missing-all-info') {
      router.push('/');
    }
    if (paymentStatus === '2-user-specified') {
      router.push('/amount');
    }
    if (paymentStatus === '3-amount-specified') {
      router.push('/select-pix');
    }
    if (paymentStatus === '4-pix-type-selected') {
      router.push('/payment/pix');
    }
    if (paymentStatus === '5-pix-confirmed') {
      router.push('/payment/credit-card');
    }
    if (paymentStatus === '6-success') {
      router.push('/success');
    }
  }, [paymentStatus]);

  return (
    <PaymentContext.Provider
      value={{
        paymentStatus,
        user,
        amount,
        creditCard,
        updateUser,
        updateAmount,
        updateCreditCard,
        pixPreference,
        updatePixPreferences,
        updatePixPayment,
        isLoading: paymentStatus === 'pending',
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}
