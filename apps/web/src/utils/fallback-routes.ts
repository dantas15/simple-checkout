import { PaymentStatus } from '../shared/schemas/payment-status-schema';

type ImplementedRoutes = Exclude<PaymentStatus, 'pending'>;

type RedirectToType = {
  [key in ImplementedRoutes]: string;
};

export const fallbackRoutesFromStatus: RedirectToType = {
  '1-missing-all-info': '/',
  '2-user-specified': '/',
  '3-amount-specified': '/amount',
  '4-pix-type-selected': '/select-pix',
  '5-pix-confirmed': '/payment/pix',
  '6-success': '/payment/credit-card',
};
