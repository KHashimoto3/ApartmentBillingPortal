import { Button, Container, Paper, Stack, TextField, Typography } from "@mui/material";
import { BillingData } from "../../types/BillingData";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useState } from "react";

type Props = {
    billingData: BillingData;
    setBillingData: React.Dispatch<React.SetStateAction<BillingData>>
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    stepperStep: number;
    setStepperStep: React.Dispatch<React.SetStateAction<number>>;
    userName: string;
}

export const Process1 = (props: Props) => {
    const billingData = props.billingData;
    const setBillingData = props.setBillingData;
    const step = props.step;
    const setStep = props.setStep;
    const stepperStep = props.stepperStep;
    const setStepperStep = props.setStepperStep;
    const userName = props.userName;

    //一部繰越で、今月支払う金額
    const [paymentPrice, setPaymentPrice] = useState<number>((billingData.price + billingData.beforeCarryOver) - billingData.carryOverPrice);
    //今月繰り越す金額
    const [carryOverPrice, setCarryOverPrice] = useState<number>(billingData.carryOverPrice);
    
    //繰越金額の再計算
    useEffect(() => {
        setCarryOverPrice((billingData.price + billingData.beforeCarryOver) - paymentPrice)
    }, [paymentPrice]);

    //請求情報更新
    const upDateBillData = () => {
        const newBillingData: BillingData = {billingId: "test01", userId: "kait", useAmount: 350, price: 3000, beforeCarryOver: 0, carryOverType: "no", carryOverPrice: carryOverPrice, dateId: 0, paidPrice: paymentPrice, paid: 0};
        setBillingData(newBillingData);
    }

    return (
        <Container sx={{width: "100%", height: "90%", overflowY: "scroll"}}>
            <Paper elevation={3} sx={{width: "80%", margin: "20px auto 0 auto", background: "linear-gradient(156deg, rgba(255, 255, 255, 1), rgba(244, 244, 244, 1))"}} children={
                <Container sx={{width: "80%", height: "150px"}}>
                    <Stack spacing={0.5} sx={{paddingTop: "20px", textAlign: "center"}}>
                        <Typography variant='h6'>8月12日 {userName}</Typography>
                        <Typography variant='h4'>￥{billingData.beforeCarryOver + billingData.price}</Typography>
                        <hr />
                        <Typography variant='body1'>支払い予定額  ￥{(billingData.beforeCarryOver + billingData.price) - billingData.carryOverPrice}</Typography>
                    </Stack>
                </Container>
            } />
             <Container sx={{width: "90%", height: "100%", textAlign: "center"}}>
                <Stack spacing={1} sx={{marginTop: "20px"}}>
                    <Typography variant="h6">集金金額を入力</Typography>
                    <TextField id="user-id" onChange={(event) => setPaymentPrice(Number(event.target.value))} value={paymentPrice} variant="outlined" />
                    <Typography variant="h3"><ArrowDownwardIcon fontSize="large" /></Typography>

                    <Typography variant="h6">繰越金額</Typography>
                    <Typography variant="h3">￥{carryOverPrice}</Typography>

                    <Button
                        size="small"
                        variant="contained"
                        onClick={() => {upDateBillData(); setStepperStep(stepperStep + 1);}}
                    >
                        次へ
                    </Button>
                    <Button
                        size="small"
                        variant="outlined"
                        onClick={() => setStep(step - 1)}
                    >
                        集金一覧へ戻る
                    </Button>
                </Stack>
            </Container>
        </Container>
           
    );
}