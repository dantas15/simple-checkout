import { useContext } from 'react';
import {
  PaymentContext,
  PaymentContextType,
} from '../contexts/payment-context';

export function usePaymentContext(): PaymentContextType {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
}
