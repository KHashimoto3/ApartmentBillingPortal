import { Container, Paper, Stack, Tab, Tabs, Typography } from "@mui/material";
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
    const step = props.step;
    const setStep = props.setStep;
    const userName = props.userName;

    const [stepperStep, setStepperStep] = useState<number>(0);

    //請求データを格納する
    const [billingData, setBillingData] = useState<BillingData>({billingId: "test01", userId: "kait", useAmount: 350, price: 3000, beforeCarryOver: 0, carryOverType: "no", carryOverPrice: 0, finalPrice: 3000, dateId: 0, paid: 0});

    const [tabValue, setTabValue] = useState<string>("0");

    return (
        <Container sx={{width: "90%", height: "100%"}}>
            <Container sx={{width: "80%"}}>
            <Tabs
                value={tabValue}
                onChange={(event: React.BaseSyntheticEvent, newValue: string) => setTabValue(newValue) }
                textColor="primary"
                indicatorColor="primary"
                aria-label="secondary tabs example"
            >
                <Tab value="0" label="確認" />
                <Tab value="1" label="集金" />
                <Tab value="2" label="チャット" />
            </Tabs>
            </Container>

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
                if (tabValue === "0") {
                  return (
                    <h1>確認タブ</h1>
                  )
                } else if (tabValue === "1") {
                  if (stepperStep === 0) {
                    return (
                         <Process1 billingData={billingData} setBillingData={setBillingData} step={step} setStep={setStep} stepperStep={stepperStep} setStepperStep={setStepperStep} />
                    )
                  } else if (stepperStep === 1) {
                    return (
                        <Process2 billingData={billingData} setBillingData={setBillingData} stepperStep={stepperStep} setStepperStep={setStepperStep} />
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
                } else {
                  return (
                    <h1>チャットタブ</h1>
                  )
                }
            })()}

        </Container>
    )
}