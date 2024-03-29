import { Home } from './home/Home';
import { NextBilling } from './billing/Billing';
import { History } from './history/History';

type Props = {
  contentsNo: number;
};

export const UserViewContents = (props: Props) => {
  if (props.contentsNo === 0) {
    return <Home />;
  } else if (props.contentsNo === 1) {
    return <NextBilling />;
  } else if (props.contentsNo === 2) {
    return <History />;
  } else {
    return <h1>メニューを選択してください。</h1>;
  }
};
