import { z } from 'zod';
import dayjs, { type Dayjs } from 'dayjs';

export const dayjsSchema = z.custom<Dayjs>(
  (val) => val instanceof dayjs,
  'Data inválida'
);
