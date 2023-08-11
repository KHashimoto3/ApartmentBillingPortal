import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button, Container, MobileStepper, Paper, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Process1 } from "./Process1";
import { Process2 } from "./Process2";
import { Process3 } from "./Process3";

import { BillingData } from "../../types/BillingData";

type Props = {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    userId: string;
    userName: string;
}


export const Process = (props: Props) => {
    const setStep = props.setStep;
    const userName = props.userName;

    const [stepperStep, setStepperStep] = useState<number>(0);
    const maxSteps = 3;
    const theme = useTheme();

    //請求データを格納する
    const [billingData, setBillingData] = useState<BillingData>({billingId: "test01", userId: "kait", useAmount: 350, price: 3000, beforeCarryOver: 0, carryOverType: "no", carryOverPrice: 0, finalPrice: 3000, dateId: 0, paid: 0});

    return (
        <Container sx={{width: "90%", height: "100%"}}>
            <Typography variant="h5">請求処理</Typography>
            <button onClick={() =>  setStep(0)}>選択に戻る</button>

            <Paper elevation={3} sx={{width: "80%", margin: "0 auto"}} children={
                <Container sx={{width: "80%", height: "150px"}}>
                    <Stack spacing={0.5} sx={{paddingTop: "20px", textAlign: "center"}}>
                        <Typography variant='h6'>8月12日 {userName}</Typography>
                        <Typography variant='h4'>￥{billingData.finalPrice}</Typography>
                        <hr />
                        <Typography variant='body1'>支払い予定額  ￥1,500</Typography>
                    </Stack>
                </Container>
            } />

            {(() => {
                if (stepperStep === 0) {
                    return (
                        <Process1 billingData={billingData} setBillingData={setBillingData} />
                    )
                } else if (stepperStep === 1) {
                    return (
                        <Process2 billingData={billingData} setBillingData={setBillingData} />
                    )
                } else if (stepperStep === 2) {
                    return (
                        <Process3 billingData={billingData} setBillingData={setBillingData} />
                    )
                } else {
                    return (
                        <h1>範囲外のステップです。</h1>
                    )
                }
            })()}

            <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={stepperStep}
        nextButton={
          <Button
            size="small"
            onClick={() => setStepperStep(stepperStep + 1)}
            disabled={stepperStep === maxSteps - 1}
          >
            次へ
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={() => setStepperStep(stepperStep - 1)} disabled={stepperStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            戻る
          </Button>
        }
      />
        </Container>
    )
}