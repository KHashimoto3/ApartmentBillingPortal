export type BillingData = {
    billingId: string;
    userId: string;
    useAmount: number;
    price: number;
    beforeCarryOver: number;
    carryOverType: string;
    carryOverPrice: number;
    finalPrice: number;
    dateId: number;
    paid: number;
};