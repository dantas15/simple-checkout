import { z } from 'zod';

export const amountSchema = z.object({
  amount: z.coerce
    .number({ message: 'A quantidade deve ser um número' })
    .int({ message: 'A quantidade deve ser um número inteiro' })
    .min(1, { message: 'A quantidade deve ser maior ou igual a 1' }),
});

export type Amount = z.infer<typeof amountSchema>;
