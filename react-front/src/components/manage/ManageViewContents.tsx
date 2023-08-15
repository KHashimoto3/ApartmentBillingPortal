import { DateSetting } from "./dateSetting/DateSetting";
import { Input } from "./input/Input";
import { List } from "./list/List";


type Props = {
    contentsNo: number
}

export const ManageViewContents = (props: Props) => {
    if (props.contentsNo === 0) {
        return <Input />;
    } else if (props.contentsNo === 1) {
        return <List />;
    } else if (props.contentsNo === 2) {
        return <DateSetting />;
    } else {
        return <h1>メニューを選択してください。</h1>
    }
}