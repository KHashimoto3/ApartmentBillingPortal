import { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { PaymentOption } from './PaymentOption';
import { Button, Container, FormHelperText, Grid, MenuItem, Select, Stack, Tab, Tabs, ThemeProvider, Typography, createTheme } from '@mui/material';

import { BillingData } from '../../types/BillingData';

import PublicIcon from '@mui/icons-material/Public';

export const NextBilling = () => {
    const [billingData, setBillingData] = useState<BillingData>({billingId: "test01", userId: "kait", useAmount: 350, price: 3000, beforeCarryOver: 0, carryOverType: "no", carryOverPrice: 0, dateId: 0, paidPrice: 0, paid: 0});
    const [value, setValue] = useState<string>('no');

    const [tabValue, setTabValue] = useState<string>("0");

    const comparePrice = -1000;
    const compareCo2 = -30;

    const [yearValue, setYearValue] = useState<number | string>("");
    const [manthValue, setManthValue] = useState<number | string>("");

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
        <Container sx={{height: "100%", overflowY: "scroll"}}>
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
                                        <Typography variant='h4'>{billingData.useAmount} kWh</Typography>
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
                                        <Typography variant='h4'>￥{billingData.price}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6} sx={{textAlign: "center"}}>
                                    <Stack spacing={0.5} sx={{paddingTop: "20px", textAlign: "center"}}>
                                        <Typography variant='body1'>今月 繰越額(予定)</Typography>
                                        <Typography variant='h4'>￥{billingData.carryOverPrice}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6} sx={{textAlign: "center"}}>
                                    <Stack spacing={0.5} sx={{paddingTop: "20px", textAlign: "center"}}>
                                        <Typography variant='body1' sx={{fontWeight: "bold"}}>先月 請求額比較</Typography>
                                        {comparePrice <= 0 ? <Typography variant='h4' sx={{color: "success.main"}}>￥{comparePrice}</Typography>: <Typography variant='h4' sx={{color: "error.main"}}>￥{comparePrice}</Typography>}
                                    </Stack>
                                </Grid>
                                <Grid item xs={6} sx={{textAlign: "center"}}>
                                    <Stack spacing={0.5} sx={{paddingTop: "20px", textAlign: "center"}}>
                                        <Typography variant='body1' sx={{fontWeight: "bold"}}>先月 CO2削減量</Typography>
                                        {compareCo2 <= 0 ? <Typography variant='h4' sx={{color: "success.main"}}><PublicIcon fontSize='large' />{compareCo2}kg</Typography>: <Typography variant='h4' sx={{color: "error.main"}}>{compareCo2}kg</Typography>}
                                    </Stack>
                                </Grid>
                            </Grid>
                            <Stack spacing={0.5} sx={{marginTop: "30px"}}>
                                <Typography variant='h5'>表示する年・月を選択</Typography>
                                <Grid container spacing={2}>
                                <Grid item xs={4} sx={{textAlign: "center"}}>
                                <Select
                                        value={yearValue}
                                        onChange={(event) => setYearValue(Number(event.target.value))}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        size='small'
                                    >
                                        <MenuItem value="">
                                            <em>年を選択</em>
                                        </MenuItem>
                                        <MenuItem value={2022}>2022年</MenuItem>
                                        <MenuItem value={2023}>2023年</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={3} sx={{textAlign: "center"}}>
                                <Select
                                        value={manthValue}
                                        onChange={(event) => setManthValue(Number(event.target.value))}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        size='small'
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
                                <Grid item xs={5} sx={{textAlign: "center"}}>
                                <Button
                                    size="medium"
                                    variant="contained"
                                >
                                表示
                             </Button>
                                </Grid>
                                </Grid>
                            </Stack>
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
                            <FormControlLabel value="no" control={<Radio />} label="繰越なし" />
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
        </Container>
    )
}