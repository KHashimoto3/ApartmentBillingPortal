import { BillingData } from "../../types/BillingData";

type Props = {
    billingData: BillingData;
    setBillingData: React.Dispatch<React.SetStateAction<BillingData>>
}

export const Process3 = (props: Props) => {
    return (<h1>ステップ3</h1>);
}