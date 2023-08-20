import { Container, Typography } from '@mui/material';
import { useState } from 'react';

import { BillingData } from '../../../types/BillingData';
import { PaymentOption } from './PaymentOption';
import { Button, Radio, RadioGroup, Sheet } from '@mui/joy';

type Props = {
  billingData: BillingData;
};

export const CarryOver = (props: Props) => {
  const billingData = props.billingData;
  const [value, setValue] = useState<string>('no');

  const [selectPageIsShow, setSelectPageIsShow] = useState<boolean>(true);

  if (selectPageIsShow) {
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

        <Container sx={{ maxWidth: '80%', margin: '20px auto 20px auto' }}>
          <RadioGroup
            aria-labelledby="storage-label"
            defaultValue="512GB"
            size="lg"
            sx={{ gap: 1.5 }}
          >
            {['512GB', '1TB', '2TB'].map((value) => (
              <Sheet
                key={value}
                sx={{
                  p: 2,
                  borderRadius: 'md',
                  boxShadow: 'sm',
                }}
              >
                <Radio
                  label={`${value} SSD storage`}
                  overlay
                  disableIcon
                  value={value}
                  slotProps={{
                    label: ({ checked }) => ({
                      sx: {
                        fontWeight: 'lg',
                        fontSize: 'md',
                        color: checked ? 'text.primary' : 'text.secondary',
                      },
                    }),
                    action: ({ checked }) => ({
                      sx: (theme) => ({
                        ...(checked && {
                          '--variant-borderWidth': '2px',
                          '&&': {
                            // && to increase the specificity to win the base :hover styles
                            borderColor: theme.vars.palette.primary[500],
                          },
                        }),
                      }),
                    }),
                  }}
                />
              </Sheet>
            ))}
          </RadioGroup>
        </Container>

        <Button onClick={() => setSelectPageIsShow(false)}>次へ</Button>
      </Container>
    );
  } else {
    return (
      <Container
        sx={{
          width: '90%',
          textAlign: 'center',
          marginTop: '20px',
          marginBottom: '50px',
        }}
      >
        <PaymentOption
          billingData={billingData}
          carryOverType={value}
          setSelectPageIsShow={setSelectPageIsShow}
        />
      </Container>
    );
  }
};
