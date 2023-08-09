import { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import "./Billing.scss";

import { PaymentOption } from './PaymentOption';

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



    //請求額を設定する
    useEffect(() => {
        const billingDataSrc: BillingData = {billingId: "test01", userId: "kait", useAmount: 350, price: 3000, beforeCarryOver: 0, carryOverType: "no", carryOverPrice: 0, finalPrice: 3000, dateId: 0, paid: false};
        setBillingData(billingDataSrc);
    }, []);

    return (
        <div className="billingContentsArea">
            <h1>今月の請求</h1>
            <Paper elevation={3} children={
                <div className="billingCardArea">
                    <h1>合計請求額：    {billingData.finalPrice}円</h1>
                    <hr />
                    <p>使用量   ：     {billingData.useAmount}</p>
                    <p>先月までの繰越額：{billingData.beforeCarryOver}円</p>
                    <p>今月請求額：     {billingData.price}円</p>
                    <p>今月繰越額：     {billingData.carryOverPrice}円</p>
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
                <PaymentOption billingData={billingData} carryOverType={value} />
            </FormControl>
        </div>
    )
}