import { useState } from "react"
import { Select } from "./Select";
import { Process } from "./Process";

export const List = () => {
    const [step, setStep] = useState<number>(0);

    if (step === 0) {
        return <Select />
    } else if (step === 1) {
        return <Process />
    } else {
        return(
            <h1>ステップが無効です。</h1>
        )
    }
}