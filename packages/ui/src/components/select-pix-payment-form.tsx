'use client';

import { FormControl, RadioGroup, Stack, Typography } from '@mui/material';
import { PixOption, PixStallmentOptionType } from './pix-option';
import { Fab } from './floating-action-button';
import { PriceCheck } from '@mui/icons-material';
import { SelectPixWrapper } from './select-pix-wrapper';

type Props = {
  handleOnSubmit: (
    event: React.FormEvent | React.MouseEventHandler<HTMLButtonElement>
  ) => void | Promise<void>;
  userName: string;
  isFormValid: boolean;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectValue: string;
  amount: number;
  pixStallmentOptions: PixStallmentOptionType[];
};

export function SelectPixPaymentForm({
  userName,
  handleOnSubmit,
  handleOnChange,
  isFormValid,
  selectValue,
  amount,
  pixStallmentOptions,
}: Props) {
  return (
    <Stack component="form" onSubmit={handleOnSubmit}>
      <Typography
        fontWeight="bold"
        textAlign="center"
        variant="h4"
        gutterBottom
      >
        {userName}, como você quer pagar?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup value={selectValue} onChange={handleOnChange}>
          <SelectPixWrapper label="Pix">
            <PixOption
              label={`1x R$${amount}`}
              total={amount}
              value="1"
              cashback={3}
            />
          </SelectPixWrapper>
          <SelectPixWrapper label="Pix Parcelado">
            {pixStallmentOptions.map((option) => (
              <PixOption key={option.value} {...option} />
            ))}
          </SelectPixWrapper>
        </RadioGroup>
      </FormControl>
      {isFormValid && (
        <Fab onClick={handleOnSubmit}>
          <PriceCheck />
        </Fab>
      )}
    </Stack>
  );
}
