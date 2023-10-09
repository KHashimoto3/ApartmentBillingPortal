import { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';

import { Container, Stack, Tab, Tabs, Typography } from '@mui/material';

import { BillingData } from '../../types/BillingData';

import { OverView } from './tab-contents/OverView';
import { CarryOver } from './tab-contents/CarryOver';
import { Chat } from './tab-contents/Chat';

export const NextBilling = () => {
  const [billingData, setBillingData] = useState<BillingData>({
    billingId: 'test01',
    userId: 'kait',
    useAmount: 350,
    price: 3000,
    beforeCarryOver: 0,
    carryOverType: 'no',
    carryOverPrice: 0,
    dateId: 0,
    paidPrice: 0,
    paid: 0,
  });

  const [tabValue, setTabValue] = useState<string>('0');

  const setFailedData = () => {
    const data: BillingData = {
      billingId: 'noData',
      userId: 'noData',
      useAmount: 0,
      price: 0,
      beforeCarryOver: 0,
      carryOverType: 'no',
      carryOverPrice: 0,
      dateId: 0,
      paidPrice: 0,
      paid: 0,
    };
    setBillingData(data);
  };

  //表示中の人の請求データを取得して表示する
  const getBillingData = async (userId: string, dateId: number) => {
    const url =
      'http://localhost:8080/billing?userId=' + userId + '&dateId=' + dateId;
    try {
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data: BillingData = await response.json();
        console.log(data);
        setBillingData(data);
        console.log('データ：' + JSON.stringify(billingData));
      } else {
        const errorData = await response.json();
        alert('エラー：' + errorData.error);
        setFailedData();
      }
    } catch (error) {
      alert('エラー：データの取得に失敗しました。');
      setFailedData();
    }
  };

  //APIから請求データを取得する
  useEffect(() => {
    getBillingData('test1', 4120);
  }, []);

  //請求額を設定する
  /*useEffect(() => {
        const billingDataSrc: BillingData = {billingId: "test01", userId: "kait", useAmount: 350, price: 3000, beforeCarryOver: 0, carryOverType: "no", carryOverPrice: 0, dateId: 0, paidPrice: 0, paid: 0};
        setBillingData(billingDataSrc);
    }, []);*/

  return (
    <Container sx={{ height: '100%', overflowY: 'scroll' }}>
      <Container sx={{ width: '80%' }}>
        <Tabs
          value={tabValue}
          onChange={(event: React.BaseSyntheticEvent, newValue: string) =>
            setTabValue(newValue)
          }
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value="0" label="確認" />
          <Tab value="1" label="繰越" />
          <Tab value="2" label="チャット" />
        </Tabs>
      </Container>

      <Paper
        elevation={3}
        sx={{
          width: '80%',
          margin: '20px auto 0 auto',
          background:
            'linear-gradient(156deg, rgba(255, 255, 255, 1), rgba(244, 244, 244, 1))',
        }}
        children={
          <Container sx={{ width: '80%', height: '150px' }}>
            <Stack
              spacing={0.5}
              sx={{ paddingTop: '20px', textAlign: 'center' }}
            >
              <Typography variant="h6">8月12日 請求金額</Typography>
              <Typography variant="h4">
                ￥{billingData.beforeCarryOver + billingData.price}
              </Typography>
              <hr />
              <Typography variant="body1">
                支払い予定額 ￥
                {billingData.beforeCarryOver +
                  billingData.price -
                  billingData.carryOverPrice}
              </Typography>
            </Stack>
          </Container>
        }
      />
      {(() => {
        if (tabValue === '0') {
          return <OverView billingData={billingData} />;
        } else if (tabValue === '1') {
          return <CarryOver billingData={billingData} />;
        } else if (tabValue === '2') {
          return <Chat />;
        } else {
          return <h1>対応していないタブ値です。</h1>;
        }
      })()}
    </Container>
  );
};
