import { Controller, UseFormReturn } from 'react-hook-form';
import { CreditCard } from '../../../shared/schemas/credit-card-schema';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
type Installment = {
  value: number;
  label: string;
};
type Props = {
  installmentOptions: Installment[];
  form: UseFormReturn<CreditCard>;
};
export function SelectInstallments({ installmentOptions, form }: Props) {
  return (
    <Controller
      name="selectedInstallment"
      control={form.control}
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel id="selectedInstallment">Parcelas</InputLabel>
          <Select {...field} labelId="selectedInstallment" label="Parcelas">
            {installmentOptions.map((installment) => (
              <MenuItem value={installment.value}>{installment.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
}
