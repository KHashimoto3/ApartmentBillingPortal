import { useState } from "react"
import { Select } from "./Select";
import { Process } from "./Process";

export const List = () => {
    const [step, setStep] = useState<number>(0);
    const [userId, setUserID] = useState<string>("test1");

    if (step === 0) {
        return <Select step={step} setStep={setStep} userId={userId} setUserId={setUserID} />
    } else if (step === 1) {
        return <Process step={step} setStep={setStep} userId={userId} />
    } else {
        return(
            <h1>ステップが無効です。</h1>
        )
    }
}