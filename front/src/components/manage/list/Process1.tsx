import { Button, Container, Stack, TextField, Typography } from "@mui/material";
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
}

export const Process1 = (props: Props) => {
    const billingData = props.billingData;
    const setBillingData = props.setBillingData;
    const step = props.step;
    const setStep = props.setStep;
    const stepperStep = props.stepperStep;
    const setStepperStep = props.setStepperStep;

    //一部繰越で、今月支払う金額
    const [paymentPrice, setPaymentPrice] = useState<number>((billingData.price + billingData.beforeCarryOver) - billingData.carryOverPrice);
    //今月繰り越す金額
    const [carryOverPrice, setCarryOverPrice] = useState<number>(billingData.carryOverPrice);
    
    //繰越金額の再計算
    useEffect(() => {
        setCarryOverPrice((billingData.price + billingData.beforeCarryOver) - paymentPrice)
    }, [paymentPrice]);

    return (
            <Container sx={{width: "90%", height: "100%", textAlign: "center"}}>
                <Stack spacing={1} sx={{marginTop: "20px"}}>
                    <Typography variant="h6">集金金額を入力</Typography>
                    <TextField id="user-id" onChange={(event) => setPaymentPrice(Number(event.target.value))} value={paymentPrice} variant="outlined" />
                    <Typography variant="h3"><ArrowDownwardIcon fontSize="large" /></Typography>
                    <Typography variant="h5">繰越金額 ￥{carryOverPrice}</Typography>

                    <Button
                        size="small"
                        variant="contained"
                        onClick={() => setStepperStep(stepperStep + 1)}
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
    );
}