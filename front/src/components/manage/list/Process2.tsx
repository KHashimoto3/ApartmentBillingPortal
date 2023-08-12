import { useEffect, useState } from "react";
import { BillingData } from "../../types/BillingData";
import { Button, Container, Paper, Stack, TextField, Typography } from "@mui/material";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

type Props = {
    billingData: BillingData;
    stepperStep: number;
    setStepperStep: React.Dispatch<React.SetStateAction<number>>;
    userName: string;
}

export const Process2 = (props: Props) => {
    const billingData = props.billingData;
    const stepperStep = props.stepperStep;
    const setStepperStep = props.setStepperStep;
    const userName = props.userName;

    //一部繰越で、今月支払う金額
    const [keepPrice, setKeepPrice] = useState<number>(0);
    //今月繰り越す金額
    const [chargePrice, setChargePrice] = useState<number>(0);
    
    //お釣りの再計算
    useEffect(() => {
        setChargePrice(keepPrice - billingData.paidPrice);
    }, [keepPrice]);

    return (
        <Container sx={{width: "100%", height: "90%", overflowY: "scroll"}}>
            <Paper elevation={3} sx={{width: "80%", margin: "20px auto 0 auto", background: "linear-gradient(156deg, rgba(255, 255, 255, 1), rgba(244, 244, 244, 1))"}} children={
                <Container sx={{width: "80%", height: "120px"}}>
                    <Stack spacing={0.5} sx={{paddingTop: "20px", textAlign: "center"}}>
                        <Typography variant='h6'>8月12日 {userName}</Typography>
                        <Typography variant='h4'>￥{billingData.paidPrice}</Typography>
                    </Stack>
                </Container>
            } />
            <Container sx={{width: "90%", height: "100%", textAlign: "center"}}>
                <Stack spacing={1} sx={{marginTop: "20px"}}>
                    <Typography variant="h6">預かり金額を入力</Typography>
                    <TextField id="user-id" onChange={(event) => setKeepPrice(Number(event.target.value))} value={keepPrice} variant="outlined" />
                    <Typography variant="h3"><ArrowDownwardIcon fontSize="large" /></Typography>
                    
                    {(() => {
                        if (chargePrice < 0) {
                            return (
                                <Typography variant="h5" sx={{color: "error.main"}}>不足 ￥{chargePrice}</Typography>
                            )
                        } else {
                            return (
                                <Typography variant="h5">お釣り ￥{chargePrice}</Typography>
                            )
                        }
                    })()}

                    <Button
                        size="small"
                        variant="contained"
                        onClick={() => setStepperStep(stepperStep + 1)}
                    >
                        完了
                    </Button>
                    <Button
                        size="small"
                        variant="outlined"
                        onClick={() => setStepperStep(stepperStep - 1)}
                    >
                        戻る
                    </Button>
                </Stack>
            </Container>
        </Container>
            
    );
}