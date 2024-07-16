import { z } from 'zod';

export const paymentStatusSchema = z.enum([
  '1-missing-all-info',
  '2-user-specified',
  '3-amount-specified',
  '4-pix-type-selected',
  '5-pix-confirmed',
  '6-success',
  'pending',
]);

export type PaymentStatus = z.infer<typeof paymentStatusSchema>;
