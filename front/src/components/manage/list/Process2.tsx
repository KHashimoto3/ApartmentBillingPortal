import { BillingData } from "../../types/BillingData";

type Props = {
    billingData: BillingData;
    setBillingData: React.Dispatch<React.SetStateAction<BillingData>>
}

export const Process2 = (props: Props) => {
    return (<h1>ステップ2</h1>);
}