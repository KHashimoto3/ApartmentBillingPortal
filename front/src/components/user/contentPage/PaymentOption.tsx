import { Button } from "@mui/material";

interface BillingData {
    billingId: string;
    userId: string;
    useAmount: number;
    price: number;
    beforeCarryOver: number;
    carryOverType: string;
    carryOverPrice: number;
    finalPrice: number;
    dateId: number;
    paid: boolean;
};

type Props = {
    billingData: BillingData,
    carryOverType: string
};

export const PaymentOption = (props: Props) => {
    const billingData: BillingData = props.billingData;
    const carryOverType: string = props.carryOverType;

    if (carryOverType == "no") {
        return (
            <div>
                <p>繰越設定は行わず、全額を支払います。</p>
                <Button
                    size="small"
                    variant="contained"
                >
                    変更を保存
                </Button>
            </div>
        )
    } else if (carryOverType == "part") {
        return (
            <div>
                <p>一部を繰越し、今月の支払額を設定します。</p>
                <Button
                    size="small"
                    variant="contained"
                >
                    変更を保存
                </Button>
            </div>
        )
    } else if (carryOverType == "all") {
        return (
            <div>
                <p>全額を繰越し、今月は支払いを行いません。</p>
                <Button
                    size="small"
                    variant="contained"
                >
                    変更を保存
                </Button>
            </div>
        )
    } else {
        return (
            <div>
                <p>対応していない支払いオプションです。</p>
            </div>
        )
    }
}