import { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import "./Billing.scss";

import { PaymentOption } from './PaymentOption';
import { Container, Grid, Stack, Tab, Tabs, ThemeProvider, Typography, createTheme } from '@mui/material';

import { BillingData } from '../../types/BillingData';

export const NextBilling = () => {
    const [billingData, setBillingData] = useState<BillingData>({billingId: "test01", userId: "kait", useAmount: 350, price: 3000, beforeCarryOver: 0, carryOverType: "no", carryOverPrice: 0, dateId: 0, paidPrice: 0, paid: 0});
    const [value, setValue] = useState<string>('no');

    const [tabValue, setTabValue] = useState<string>("0");

    const setFailedData = () => {
        const data: BillingData = { billingId: 'noData',
                userId: 'noData',
                useAmount: 0,
                price: 0,
                beforeCarryOver: 0,
                carryOverType: 'no',
                carryOverPrice: 0,
                dateId: 0,
                paidPrice: 0,
                paid: 0};
        setBillingData(data);
    }

    //表示中の人の請求データを取得して表示する
    const getBillingData = async (userId: string) => {
        const url = "http://localhost:8080/get-bill-rec?userId=" + userId;
        try {
            const response = await fetch(url, {method:'GET' ,mode: "cors", headers: {
                'Content-Type': 'application/json'
            }});
            if (response.ok) {
                const data: BillingData = await response.json();
                console.log(data);
                setBillingData(data);
                console.log("データ："+JSON.stringify(billingData));
            } else {
                const errorData = await response.json();
                alert("エラー：" + errorData.error);
                setFailedData();
            }
        } catch (error) {
            alert("エラー：データの取得に失敗しました。");
            setFailedData();
        }
    }

    //APIから請求データを取得する
    useEffect(() => {
        getBillingData("test1");
    }, []);

    //請求額を設定する
    /*useEffect(() => {
        const billingDataSrc: BillingData = {billingId: "test01", userId: "kait", useAmount: 350, price: 3000, beforeCarryOver: 0, carryOverType: "no", carryOverPrice: 0, dateId: 0, paidPrice: 0, paid: 0};
        setBillingData(billingDataSrc);
    }, []);*/

    const userTabTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#26c988'
            }
        }
    })

    return (
        <div className="billingContentsArea">
            <ThemeProvider theme={userTabTheme}>
            <Container sx={{width: "80%"}}>
            <Tabs
                value={tabValue}
                onChange={(event: React.BaseSyntheticEvent, newValue: string) => setTabValue(newValue) }
                textColor="primary"
                indicatorColor="primary"
                aria-label="secondary tabs example"
            >
                <Tab value="0" label="確認" />
                <Tab value="1" label="繰越" />
                <Tab value="2" label="チャット" />
            </Tabs>
            </Container>
            </ThemeProvider>
            
            <Paper elevation={3} sx={{width: "80%", margin: "20px auto 0 auto", background: "linear-gradient(156deg, rgba(255, 255, 255, 1), rgba(244, 244, 244, 1))"}} children={
                <Container sx={{width: "80%", height: "150px"}}>
                    <Stack spacing={0.5} sx={{paddingTop: "20px", textAlign: "center"}}>
                        <Typography variant='h6'>8月12日 請求金額</Typography>
                        <Typography variant='h4'>￥{billingData.beforeCarryOver + billingData.price}</Typography>
                        <hr />
                        <Typography variant='body1'>支払い予定額  ￥{(billingData.beforeCarryOver + billingData.price) - billingData.carryOverPrice}</Typography>
                    </Stack>
                </Container>
            } />
            {(() => {
                if (tabValue === "0") {
                    return (
                        <Container sx={{width: "80%", marginBottom: "50px"}}>
                            <Grid container spacing={1}>
                                <Grid item xs={6} sx={{textAlign: "center"}}>
                                    <Stack spacing={0.5} sx={{paddingTop: "20px", textAlign: "center"}}>
                                        <Typography variant='body1'>使用量</Typography>
                                        <Typography variant='h4'>{billingData.useAmount} KW</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6} sx={{textAlign: "center"}}>
                                    <Stack spacing={0.5} sx={{paddingTop: "20px", textAlign: "center"}}>
                                        <Typography variant='body1'>〜先月 繰越額</Typography>
                                        <Typography variant='h4'>￥{billingData.beforeCarryOver}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6} sx={{textAlign: "center"}}>
                                    <Stack spacing={0.5} sx={{paddingTop: "20px", textAlign: "center"}}>
                                        <Typography variant='body1'>請求額</Typography>
                                        <Typography variant='h4'>￥{billingData.price}円</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6} sx={{textAlign: "center"}}>
                                    <Stack spacing={0.5} sx={{paddingTop: "20px", textAlign: "center"}}>
                                        <Typography variant='body1'>今月 繰越額(予定)</Typography>
                                        <Typography variant='h4'>￥{billingData.carryOverPrice}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} sx={{textAlign: "center"}}>
                                    <Stack spacing={0.5} sx={{paddingTop: "20px", textAlign: "center"}}>
                                        <Typography variant='body1'>先月分との請求額比較</Typography>
                                        <Typography variant='h4'>-￥1,000</Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Container>
                    )
                } else if (tabValue === "1") {
                    return (
                            <Container sx={{width: "90%", textAlign: "center", marginTop: "20px", marginBottom: "50px"}}>
                            <Typography variant='h5'>繰越のタイプを選択</Typography>
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
                        </Container>
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