import { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import "./Billing.scss";

import { PaymentOption } from './PaymentOption';

interface BillingData {
    sum: number,
    amount: number,
    thisMonthPrice: number,
    carryOverPrice: number
};

export const NextBilling = () => {
    const [billingData, setBillingData] = useState<BillingData>({sum: 0, amount: 0, thisMonthPrice: 0, carryOverPrice: 0});
    const [value, setValue] = useState<string>('no');



    //請求額を設定する
    useEffect(() => {
        const billingDataSrc: BillingData = {
            sum: 3050, amount: 45, thisMonthPrice: 2160, carryOverPrice: 7870
        };
        setBillingData(billingDataSrc);
    }, []);

    return (
        <div className="homeContentsArea">
            <h1>今月の請求</h1>
            <Paper elevation={3} children={
                <div className="billingCardArea">
                    <h1>合計請求額：    {billingData.sum}円</h1>
                    <hr />
                    <p>使用量   ：     {billingData.amount}</p>
                    <p>今月請求額：     {billingData.thisMonthPrice}円</p>
                    <p>繰越請求額：     {billingData.carryOverPrice}円</p>
                </div>
            } />
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
                <PaymentOption />
            </FormControl>
        </div>
    )
}