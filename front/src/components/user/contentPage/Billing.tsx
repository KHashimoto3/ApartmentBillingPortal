import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import "./Billing.scss";

export const NextBilling = () => {
    return (
        <div className="homeContentsArea">
            <h1>今月の請求</h1>
            <Paper elevation={3} children={
                <div className="billingCardArea">
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <h3>合計：</h3>
                        </Grid>
                        <Grid item xs={8}>
                            <h2>15,000円</h2>
                        </Grid>
                    </Grid>
                </div>
            } />
        </div>
    )
}