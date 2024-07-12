'use client';

import { createContext, ReactNode, useState } from 'react';
import { userSchema, type User } from '../schemas/user-schema';
import { amountSchema, type Amount } from '../schemas/amount-schema';
import {
  creditCardSchema,
  type CreditCard,
} from '../schemas/credit-card-schema';
import { useRouter } from 'next/navigation';

type Nullable<T> = T | null | undefined;

export type PaymentContextType = {
  user: Nullable<User>;
  updateUser: (data: User) => Promise<void>;
  amount: Nullable<Amount>;
  updateAmount: (data: Amount) => Promise<void>;
  creditCard: Nullable<CreditCard>;
  updateCreditCard: (data: CreditCard) => Promise<void>;
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

  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState<Nullable<User>>();
  const [amount, setAmount] = useState<Nullable<Amount>>();
  const [creditCard, setCreditCard] = useState<Nullable<CreditCard>>();

  const updateUser = async (data: User) => {
    setIsLoading(true);
    setUser(data);
    setIsLoading(false);
    router.push('/select-amount');
  };
  const updateAmount = async (data: Amount) => {
    setIsLoading(true);
    setAmount(data);
    setIsLoading(false);
    router.push('/credit-card-input');
  };
  const updateCreditCard = async (data: CreditCard) => {
    setIsLoading(true);
    setCreditCard(data);
    setIsLoading(false);
    router.push('/upfront-payment');
  };

  return (
    <PaymentContext.Provider
      value={{
        user,
        amount,
        creditCard,
        updateUser,
        updateAmount,
        updateCreditCard,
        isLoading,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}
