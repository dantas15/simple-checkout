import { z } from 'zod';
import { dayjsSchema } from './dayjs-schema';
import { validateCPF } from '../../utils/validate-cpf';
import dayjs, { type Dayjs } from 'dayjs';

export const creditCardSchema = z.object({
  fullName: z
    .string({ message: 'Nome deve ser um texto válido' })
    .min(1, { message: 'Nome é obrigatório' }),
  document: z
    .string()
    .min(1, { message: 'CPF é obrigatório' })
    .refine(validateCPF, { message: 'CPF inválido' }),
  creditCard: z
    .string({ message: 'Cartão de crédito deve ser um texto válido' })
    .min(16, { message: 'Cartão de crédito deve ter no mínimo 16 dígitos' })
    .max(19, { message: 'Cartão de crédito deve ter no máximo 19 dígitos' }),
  dueDate: dayjsSchema.optional().refine(
    (dueDate?: Dayjs) => {
      if (!dueDate) {
        return false;
      }
      const nextMonth = dayjs();
      return dueDate.isValid() && dueDate.isAfter(nextMonth);
    },
    { message: 'Data deve ser ser pelo menos mês que vem' }
  ),
  securityNumber: z
    .string()
    .min(1, 'Informe o CVV')
    .max(3, 'CVV possui apenas 3 números')
    .refine((cvv) => !isNaN(Number(cvv)), 'CVV é composto por números'),
  selectedInstallment: z
    .number({ message: 'Parcelas deve ser um número válido' })
    .min(1, { message: 'Escolha uma parcela' }),
});

export type CreditCard = z.infer<typeof creditCardSchema>;
