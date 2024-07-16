import { useContext } from 'react';
import {
  PaymentContext,
  PaymentContextType,
} from '../contexts/payment-context';
import { isBrowser } from '../../utils/isBrowser';

const paymentContextNullValues: PaymentContextType = {
  paymentStatus: 'pending',
  user: null,
  updateUser: async () => {},
  amount: null,
  updateAmount: async () => {},
  creditCard: null,
  updateCreditCard: async () => {},
  pixPreference: null,
  updatePixPreferences: async () => {},
  updatePixPayment: async () => {},
  clearData: () => {},
  isPaymentLoading: true,
};

export function usePaymentContext(): PaymentContextType {
  if (!isBrowser()) {
    return paymentContextNullValues;
  }
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
}
