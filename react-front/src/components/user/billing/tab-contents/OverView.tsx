import {
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';

import { BillingData } from '../../../types/BillingData';
import { useState } from 'react';

import PublicIcon from '@mui/icons-material/Public';

type Props = {
  billingData: BillingData;
};

export const OverView = (props: Props) => {
  const billingData = props.billingData;

  const comparePrice = -1000;
  const compareCo2 = -30;

  const [yearValue, setYearValue] = useState<number | string>('');
  const [manthValue, setManthValue] = useState<number | string>('');

  return (
    <Container sx={{ width: '80%', marginBottom: '50px' }}>
      <Grid container spacing={1}>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <Stack spacing={0.5} sx={{ paddingTop: '20px', textAlign: 'center' }}>
            <Typography variant="body1">使用量</Typography>
            <Typography variant="h4">{billingData.useAmount} kWh</Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <Stack spacing={0.5} sx={{ paddingTop: '20px', textAlign: 'center' }}>
            <Typography variant="body1">〜先月 繰越額</Typography>
            <Typography variant="h4">
              ￥{billingData.beforeCarryOver}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <Stack spacing={0.5} sx={{ paddingTop: '20px', textAlign: 'center' }}>
            <Typography variant="body1">請求額</Typography>
            <Typography variant="h4">￥{billingData.price}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <Stack spacing={0.5} sx={{ paddingTop: '20px', textAlign: 'center' }}>
            <Typography variant="body1">今月 繰越額(予定)</Typography>
            <Typography variant="h4">￥{billingData.carryOverPrice}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <Stack spacing={0.5} sx={{ paddingTop: '20px', textAlign: 'center' }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              先月 請求額比較
            </Typography>
            {comparePrice <= 0 ? (
              <Typography variant="h4" sx={{ color: 'success.main' }}>
                ￥{comparePrice}
              </Typography>
            ) : (
              <Typography variant="h4" sx={{ color: 'error.main' }}>
                ￥{comparePrice}
              </Typography>
            )}
          </Stack>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <Stack spacing={0.5} sx={{ paddingTop: '20px', textAlign: 'center' }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              先月 CO2削減量
            </Typography>
            {compareCo2 <= 0 ? (
              <Typography variant="h4" sx={{ color: 'success.main' }}>
                <PublicIcon fontSize="large" />
                {compareCo2}kg
              </Typography>
            ) : (
              <Typography variant="h4" sx={{ color: 'error.main' }}>
                {compareCo2}kg
              </Typography>
            )}
          </Stack>
        </Grid>
      </Grid>
      <Stack spacing={0.5} sx={{ marginTop: '30px' }}>
        <Typography variant="h5">表示する年・月を選択</Typography>
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ textAlign: 'center' }}>
            <Select
              value={yearValue}
              onChange={(event) => setYearValue(Number(event.target.value))}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              size="small"
            >
              <MenuItem value="">
                <em>年を選択</em>
              </MenuItem>
              <MenuItem value={2022}>2022年</MenuItem>
              <MenuItem value={2023}>2023年</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: 'center' }}>
            <Select
              value={manthValue}
              onChange={(event) => setManthValue(Number(event.target.value))}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              size="small"
            >
              <MenuItem value="">
                <em>月を選択</em>
              </MenuItem>
              <MenuItem value={1}>1月</MenuItem>
              <MenuItem value={2}>2月</MenuItem>
              <MenuItem value={3}>3月</MenuItem>
              <MenuItem value={4}>4月</MenuItem>
              <MenuItem value={5}>5月</MenuItem>
              <MenuItem value={6}>6月</MenuItem>
              <MenuItem value={7}>7月</MenuItem>
              <MenuItem value={8}>8月</MenuItem>
              <MenuItem value={9}>9月</MenuItem>
              <MenuItem value={10}>10月</MenuItem>
              <MenuItem value={11}>11月</MenuItem>
              <MenuItem value={12}>12月</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: 'center' }}>
            <Button size="medium" variant="contained">
              表示
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};
