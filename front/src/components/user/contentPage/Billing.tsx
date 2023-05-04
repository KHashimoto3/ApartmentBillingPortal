import Paper from '@mui/material/Paper';

import "./Billing.scss";

export const NextBilling = () => {

    const paperStyle = {
        height: '100px',
    };

    return (
        <div className="homeContentsArea">
            <h1>今月の請求</h1>
            <Paper elevation={3} children={
                <div className="billingCardArea">
                    <h1>請求合計額：    3050円</h1>
                    <hr />
                    <p>今月請求額：     300円</p>
                    <p>今月請求額：     300円</p>
                    <p>今月請求額：     300円</p>
                </div>
            } />
        </div>
    )
}