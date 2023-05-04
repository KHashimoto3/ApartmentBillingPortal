import Paper from '@mui/material/Paper';

import "./Billing.scss";

export const NextBilling = () => {


    return (
        <div className="homeContentsArea">
            <h1>今月の請求</h1>
            <Paper elevation={3} children={
                <div className="billingCardArea">
                    <h1>合計請求額：    3050円</h1>
                    <hr />
                    <p>使用量   ：     45</p>
                    <p>今月請求額：     2160円</p>
                    <p>繰越請求額：     7870円</p>
                </div>
            } />
        </div>
    )
}