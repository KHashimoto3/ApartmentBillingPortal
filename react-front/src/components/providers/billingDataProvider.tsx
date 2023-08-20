import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { BillingData } from '../types/BillingData';

export const BillingContext = createContext(
  {} as {
    billingData: BillingData;
    setBillingData: Dispatch<SetStateAction<BillingData>>;
  },
);

export const BillingDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  //請求データを保存するステート
  const [billingData, setBillingData] = useState<BillingData>({
    billingId: 'test01',
    userId: 'kait',
    useAmount: 350,
    price: 3000,
    beforeCarryOver: 0,
    carryOverType: 'no',
    carryOverPrice: 0,
    dateId: 0,
    paidPrice: 0,
    paid: 0,
  });

  return (
    <BillingContext.Provider value={{ billingData, setBillingData }}>
      {children}
    </BillingContext.Provider>
  );
};
