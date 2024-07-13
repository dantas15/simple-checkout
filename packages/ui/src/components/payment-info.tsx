'use client';

import {
  colors,
  Divider,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';

import dayjs from 'dayjs';
import { StepIcon } from './step-icon';
import { FAQ } from './faq';

type PaymentTypes = 'pix' | 'credit-card';
type StepperOptions = {
  active: PaymentTypes;
  completed: PaymentTypes[];
};

type Props = {
  identifier: string;
  firstAmount: number;
  secondAmount: number;
  stepperOptions: StepperOptions;
};

export function PaymentInfo({
  identifier,
  firstAmount,
  secondAmount,
  stepperOptions,
}: Props) {
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
          <Stepper
            activeStep={stepperOptions.active === 'pix' ? 0 : 1}
            orientation="vertical"
          >
            <Step completed={stepperOptions.completed.includes('pix')}>
              <StepLabel>1ª entrada no Pix</StepLabel>
            </Step>
            <Step completed={stepperOptions.completed.includes('credit-card')}>
              <StepLabel StepIconComponent={StepIcon}>2ª no cartão</StepLabel>
            </Step>
          </Stepper>
        </div>
        <Stack justifyContent="space-around" alignItems="center" height={100}>
          <Typography variant="body1" fontWeight={700}>
            R${firstAmount}
          </Typography>
          <Typography variant="body1" fontWeight={700}>
            R${secondAmount}
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
          {identifier}
        </Typography>
      </Stack>
    </>
  );
}
