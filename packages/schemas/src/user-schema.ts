import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
});

export type User = z.infer<typeof userSchema>;
