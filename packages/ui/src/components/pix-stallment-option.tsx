'use client';

import { CheckCircle } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  Radio,
  Stack,
  styled,
  Typography,
  useRadioGroup,
} from '@mui/material';

export type PixStallmentOptionType = {
  value: string;
  label: string;
  total: number;
  cashback?: number;
  discount?: number;
};

type Props = PixStallmentOptionType;

const BlueFlag = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: '#fff',
  padding: '4px 8px',
  borderRadius: '4px',
  marginTop: theme.spacing(2),
  display: 'inline-block',
  width: '100%',
}));

export function PixStallmentOption({
  value,
  label,
  total,
  cashback,
  discount,
}: Props) {
  const radioGroup = useRadioGroup();
  const isSelected = radioGroup?.value === value;

  return (
    <Card
      variant="outlined"
      component="li"
      color={isSelected ? 'primary' : 'secondary'}
      sx={{
        borderRadius: 0,
        '&:first-of-type': {
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        },
        '&:last-of-type': {
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        },
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
          <BlueFlag>
            💰 <b>R$ {(total / cashback).toFixed(2)}</b> de volta no seu Pix na
            hora
          </BlueFlag>
        )}
        {discount && (
          <BlueFlag>
            <b>-{discount}% de juros</b>: Melhor opção de parcelamento
          </BlueFlag>
        )}
      </CardContent>
    </Card>
  );
}
