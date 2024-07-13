import { z } from 'zod';

export const pixPreferenceSchema = z.object({
  paymentType: z.number().int().min(1),
});

export type PixPreference = z.infer<typeof pixPreferenceSchema>;
