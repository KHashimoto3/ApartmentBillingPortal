import { useEffect, useState } from "react";
import { BillingData } from "../../types/BillingData";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

type Props = {
    billingData: BillingData;
    setBillingData: React.Dispatch<React.SetStateAction<BillingData>>
    stepperStep: number;
    setStepperStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Process2 = (props: Props) => {
    const billingData = props.billingData;
    const setBillingData = props.setBillingData;
    const stepperStep = props.stepperStep;
    const setStepperStep = props.setStepperStep;

    //一部繰越で、今月支払う金額
    const [keepPrice, setKeepPrice] = useState<number>(0);
    //今月繰り越す金額
    const [chargePrice, setChargePrice] = useState<number>(0);
    
    //お釣りの再計算
    useEffect(() => {
        setChargePrice(keepPrice - billingData.finalPrice)
    }, [keepPrice]);

    return (
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
                        次へ
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
    );
}