'use client';

import { CheckCircle } from '@mui/icons-material';
import {
  Card,
  CardContent,
  Radio,
  Stack,
  Typography,
  useRadioGroup,
} from '@mui/material';
import { getPaperOrPrimaryWithOpacityBackground } from '../utils/getPaperOrPrimaryWithOpacityBackground';
import { Flag } from './flag';
import { theme } from '../theme';

export type PixStallmentOptionType = {
  value: string;
  label: string;
  total: number;
  cashback?: number;
  discount?: number;
};

const cardStyles = {
  borderWidth: 2,
  borderRadius: 0,
  '&:first-of-type': {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  '&:last-of-type': {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  '&:not(:first-of-type):not(:last-of-type)': {
    borderBottomWidth: 0,
  },
  '&:first-of-type:not(:last-of-type)': {
    borderBottomWidth: 0,
  },
};

type Props = PixStallmentOptionType;

export function PixOption({ value, label, total, cashback, discount }: Props) {
  const radioGroup = useRadioGroup();
  const isSelected = radioGroup?.value === value;

  return (
    <Card
      variant="outlined"
      sx={{
        ...cardStyles,
        background: getPaperOrPrimaryWithOpacityBackground(theme, isSelected),
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
        >
          <Stack>
            <Typography variant="h6">{label}</Typography>
            {value !== '1' && <p>Total: R$ {total.toFixed(2)}</p>}
            {cashback && (
              <Typography variant="body2" color="primary">
                Ganhe {cashback}% de Cashback
              </Typography>
            )}
          </Stack>
          <Radio value={value} checkedIcon={<CheckCircle />} />
        </Stack>
        {cashback && (
          <Flag isSelected={isSelected}>
            💰 <b>R$ {(total / cashback).toFixed(2)}</b> de volta no seu Pix na
            hora
          </Flag>
        )}
        {discount && (
          <Flag isSelected={isSelected}>
            <b>-{discount}% de juros</b>: Melhor opção de parcelamento
          </Flag>
        )}
      </CardContent>
    </Card>
  );
}
