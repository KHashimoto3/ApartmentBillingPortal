import {
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import { BillingData } from '../../../types/BillingData';
import { PaymentOption } from './PaymentOption';

type Props = {
  billingData: BillingData;
};

export const CarryOver = (props: Props) => {
  const billingData = props.billingData;
  const [value, setValue] = useState<string>('no');

  return (
    <Container
      sx={{
        width: '90%',
        textAlign: 'center',
        marginTop: '20px',
        marginBottom: '50px',
      }}
    >
      <Typography variant="h5">繰越のタイプを選択</Typography>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          value={value}
          name="radio-buttons-group"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        >
          <FormControlLabel value="no" control={<Radio />} label="繰越なし" />
          <FormControlLabel value="part" control={<Radio />} label="一部繰越" />
          <FormControlLabel value="all" control={<Radio />} label="全額繰越" />
        </RadioGroup>
        <PaymentOption billingData={billingData} carryOverType={value} />
      </FormControl>
    </Container>
  );
};
