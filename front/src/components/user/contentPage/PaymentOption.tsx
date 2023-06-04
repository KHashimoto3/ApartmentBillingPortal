interface BillingData {
    sum: number,
    amount: number,
    thisMonthPrice: number,
    carryOverPrice: number
};

type Props = {
    billingData: BillingData,
    carryOverType: string
};

export const PaymentOption = (props: Props) => {
    const billingData: BillingData = props.billingData;
    return (
        <div>
            <h1>繰越設定</h1>
        </div>
    );
}