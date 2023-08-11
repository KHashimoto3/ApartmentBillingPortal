import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button, Container, MobileStepper, useTheme } from "@mui/material";
import { useState } from "react";
import { Process1 } from "./Process1";
import { Process2 } from "./Process2";
import { Process3 } from "./Process3";

type Props = {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    userId: string;
}


export const Process = (props: Props) => {
    const setStep = props.setStep;
    const userId = props.userId;

    const [stepperStep, setStepperStep] = useState<number>(0);
    const maxSteps = 3;
    const theme = useTheme();

    return (
        <Container sx={{width: "90%"}}>
            <h1>請求処理</h1>
            <p>処理するユーザ：{userId}</p>
            <button onClick={() =>  setStep(0)}>選択に戻る</button>

            {(() => {
                if (stepperStep === 0) {
                    return (
                        <Process1 />
                    )
                } else if (stepperStep === 1) {
                    return (
                        <Process2 />
                    )
                } else if (stepperStep === 2) {
                    return (
                        <Process3 />
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