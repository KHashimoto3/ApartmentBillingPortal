import { Button, Container, Stack, Typography } from "@mui/material";
import { BillingData } from "../../types/BillingData";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

type Props = {
    billingData: BillingData;
    setBillingData: React.Dispatch<React.SetStateAction<BillingData>>
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    userName: string;
}

export const Process3 = (props: Props) => {
    const billingData = props.billingData;
    const step = props.step;
    const setStep = props.setStep;
    const userName = props.userName;

    return (
        <Container sx={{width: "90%", height: "100%", textAlign: "center"}}>
            <CheckCircleOutlineIcon sx={{width: "150px", height: "auto", color: "success.main"}} />
            <Typography variant="h3">集金完了</Typography>

            <Stack spacing={1} sx={{marginTop: "20px"}}>
                <Typography variant="h5">＜対象者＞</Typography>
                <Typography variant="h6">氏名：{userName}</Typography>
                <Typography variant="h6">集金額：￥{billingData.finalPrice}</Typography>
                <Typography variant="h6">繰越額：￥{billingData.carryOverPrice}</Typography>
            </Stack>

            <Stack spacing={1} sx={{marginTop: "20px"}}>
                <Button
                        size="small"
                        variant="contained"
                        onClick={() => setStep(step - 1)}
                    >
                        完了
                </Button>
            </Stack>
        </Container>
    );
}