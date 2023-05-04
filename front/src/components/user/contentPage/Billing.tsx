import Paper from '@mui/material/Paper';

import "./Billing.scss";
import { useEffect, useState } from 'react';

interface BillingData {
    sum: number,
    amount: number,
    thisMonthPrice: number,
    carryOverPrice: number
};

export const NextBilling = () => {
    const [billingData, setBillingData] = useState<BillingData>({sum: 0, amount: 0, thisMonthPrice: 0, carryOverPrice: 0});
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
        </div>
    )
}