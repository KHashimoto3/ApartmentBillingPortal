import { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import "./Billing.scss";

import { PaymentOption } from './PaymentOption';
import { Box, Container, Stack, Tab, Tabs, Typography } from '@mui/material';

interface BillingData {
    billingId: string;
    userId: string;
    useAmount: number;
    price: number;
    beforeCarryOver: number;
    carryOverType: string;
    carryOverPrice: number;
    finalPrice: number;
    dateId: number;
    paid: boolean;
};

export const NextBilling = () => {
    const [billingData, setBillingData] = useState<BillingData>({billingId: "test01", userId: "kait", useAmount: 350, price: 3000, beforeCarryOver: 0, carryOverType: "no", carryOverPrice: 0, finalPrice: 3000, dateId: 0, paid: false});
    const [value, setValue] = useState<string>('no');

    const [tabValue, setTabValue] = useState<string>("0");


    //請求額を設定する
    useEffect(() => {
        const billingDataSrc: BillingData = {billingId: "test01", userId: "kait", useAmount: 350, price: 3000, beforeCarryOver: 0, carryOverType: "no", carryOverPrice: 0, finalPrice: 3000, dateId: 0, paid: false};
        setBillingData(billingDataSrc);
    }, []);

    return (
        <div className="billingContentsArea">
            <Container sx={{width: "80%"}}>
            <Tabs
                value={tabValue}
                onChange={(event: React.BaseSyntheticEvent, newValue: string) => setTabValue(newValue) }
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="0" label="確認" />
                <Tab value="1" label="繰越" />
                <Tab value="2" label="チャット" />
            </Tabs>
            </Container>
            <Typography sx={{textAlign: "center", paddingTop: "30px"}} variant='h5'>こんにちは。田中さん。</Typography>
            <Paper elevation={3} sx={{width: "80%", margin: "0 auto"}} children={
                <Container sx={{width: "80%", height: "150px"}}>
                    <Stack spacing={0.5} sx={{paddingTop: "20px", textAlign: "center"}}>
                        <Typography variant='h6'>8月12日 請求金額</Typography>
                        <Typography variant='h4'>￥1,500</Typography>
                        <hr />
                        <Typography variant='body1'>支払い予定額  ￥1,500</Typography>
                    </Stack>
                </Container>
            } />
            {(() => {
                if (tabValue === "0") {
                    return (
                        <p>１個目</p>
                    )
                } else if (tabValue === "1") {
                    return (
                        <>
                        <h2>繰越設定</h2>
                        <FormControl>
                            <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={value}
                    name="radio-buttons-group"
                    onChange={(e:  React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                            >
                            <FormControlLabel value="no" control={<Radio />} label="設定なし" />
                             <FormControlLabel value="part" control={<Radio />} label="一部繰越" />
                            <FormControlLabel value="all" control={<Radio />} label="全額繰越" />
                        </RadioGroup>
                        <PaymentOption billingData={billingData} carryOverType={value} />
                        </FormControl>
                        </>
                    )
                } else {
                    return (
                        <h1>３個目</h1>
                    )
                }
            })()}
        </div>
    )
}