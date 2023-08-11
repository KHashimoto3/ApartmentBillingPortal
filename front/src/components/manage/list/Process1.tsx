import { BillingData } from "../../types/BillingData";

type Props = {
    billingData: BillingData;
    setBillingData: React.Dispatch<React.SetStateAction<BillingData>>
}

export const Process1 = (props: Props) => {
    return (<h1>ステップ1</h1>);
}