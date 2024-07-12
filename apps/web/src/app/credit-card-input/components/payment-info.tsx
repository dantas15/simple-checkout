'use client';

import {
  colors,
  Divider,
  Stack,
  Step,
  StepIcon,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { FAQ } from '@simple-checkout/ui/components';

import dayjs from 'dayjs';

export function PaymentInfo() {
  return (
    <>
      <Stack pt={4} alignItems="center">
        <Typography variant="body2" color={colors.grey[400]}>
          Prazo para pagamento
        </Typography>
        <Typography variant="body2" fontWeight={700}>
          {dayjs().format('DD/MM/YYYY - HH:mm')}
        </Typography>
      </Stack>
      <Stack
        p={4}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <div>
          <Stepper orientation="vertical">
            <Step completed>
              <StepLabel>1ª entrada no Pix</StepLabel>
            </Step>
            <Step>
              <StepLabel StepIconComponent={StepIcon}>2ª no cartão</StepLabel>
            </Step>
          </Stepper>
        </div>
        <Stack justifyContent="space-around" alignItems="center" height={100}>
          <Typography variant="body1" fontWeight={700}>
            R$123
          </Typography>
          <Typography variant="body1" fontWeight={700}>
            R$321
          </Typography>
        </Stack>
      </Stack>
      <Divider />
      <FAQ />
      <Divider />
      <Stack pt={4} alignItems="center">
        <Typography variant="body2" color={colors.grey[400]}>
          Identificador
        </Typography>
        <Typography variant="body2" fontWeight={700}>
          {'123'}
        </Typography>
      </Stack>
    </>
  );
}
