import { z } from 'zod';

export const pixPreferenceSchema = z
  .string()
  .pipe(z.coerce.number().int().min(1))
  .transform((v) => v.toString());

export type PixPreference = z.infer<typeof pixPreferenceSchema>;
