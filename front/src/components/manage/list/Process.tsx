import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button, MobileStepper, useTheme } from "@mui/material";
import { useState } from "react";

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
        <>
            <h1>プロセス</h1>
            <p>表示するユーザ：{userId}</p>
            <button onClick={() =>  setStep(0)}>選択に戻る</button>

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
            Next
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
            Back
          </Button>
        }
      />
        </>
    )
}