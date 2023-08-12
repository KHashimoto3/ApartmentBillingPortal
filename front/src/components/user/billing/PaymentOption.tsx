import { Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { BillingData } from "../../types/BillingData";

type Props = {
    billingData: BillingData,
    carryOverType: string
};

export const PaymentOption = (props: Props) => {
    const billingData: BillingData = props.billingData;
    const carryOverType: string = props.carryOverType;

    //一部繰越で、今月支払う金額
    const [paymentPrice, setPaymentPrice] = useState<number>((billingData.price + billingData.beforeCarryOver) - billingData.carryOverPrice);
    //今月繰り越す金額
    const [carryOverPrice, setCarryOverPrice] = useState<number>(billingData.carryOverPrice);

    const [saveDisabled, setSaveDisabled] = useState<boolean>(false);

    useEffect(() => {
        setCarryOverPrice((billingData.price + billingData.beforeCarryOver) - paymentPrice)
        if (paymentPrice === 0) {
            setSaveDisabled(true);
        } else {
            setSaveDisabled(false);
        }
    }, [paymentPrice]);

    //既に設定されているオプションの場合、「変更を保存」ボタンは無効にする
    useEffect(() => {
        if (billingData.carryOverType === carryOverType) {
            setSaveDisabled(true);
        } else {
            setSaveDisabled(false);
        }
    }, [carryOverType]);

    //既に設定されている繰越額と同じ金額 または繰越額が0の場合、「変更を保存」ボタンは無効にする
    useEffect(() => {
        if ((billingData.carryOverPrice === carryOverPrice) || (carryOverPrice <= 0)) {
            setSaveDisabled(true);
        } else {
            setSaveDisabled(false);
        }
    }, [carryOverPrice]);

    //変更を保存ボタンが押された
    const saveCarryOver = (type: string) => {
        if (type === "no") {
            alert("繰越は行わないことを設定しました。");
        } else if (type === "part") {
            alert(carryOverPrice + "円繰越して、" + paymentPrice + "円、支払うことを設定しました。");
        } else if (type === "all") {
            alert("全額繰越を設定しました。");
        } else {
            alert("対応していない支払いオプションを設定しようとしました！！");
        }
    };

    if (carryOverType === "no") {
        return (
            <div>
                <Typography variant="body1" sx={{marginBottom: "20px",color: "#000", background: "#ededed", fontWeight: "bold", textAlign: "left"}}>繰越設定は行わず、全額を支払います。</Typography>
                <Stack spacing={2}>
                <Button
                    size="small"
                    variant="contained"
                    onClick={() => saveCarryOver("no")}
                    disabled={saveDisabled}
                >
                    設定を保存
                </Button>
                </Stack>
            </div>
        )
    } else if (carryOverType === "part") {
        return (
            <div>
                <Typography variant="body1" sx={{marginBottom: "20px",color: "#000", background: "#ededed", fontWeight: "bold", textAlign: "left"}}>一部を繰越し、今月の支払額を設定します。</Typography>
                <Stack spacing={1}>
                    <Typography variant="h6">今月支払う金額を入力</Typography>
                    <TextField id="user-id" onChange={(event) => setPaymentPrice(Number(event.target.value))} value={paymentPrice} variant="outlined" />
                    <Typography variant="h3"><ArrowDownwardIcon fontSize="large" /></Typography>
                    <Typography variant="h6">繰越金額</Typography>
                    <Typography variant="h3">￥{carryOverPrice}</Typography>
                    <Button
                        size="small"
                        variant="contained"
                        onClick={() => saveCarryOver("part")}
                        disabled={saveDisabled}
                    >
                        設定を保存
                    </Button>
                </Stack>
            </div>
        )
    } else if (carryOverType === "all") {
        return (
            <div>
                <Typography variant="body1" sx={{marginBottom: "20px",color: "#000", background: "#ededed", fontWeight: "bold", textAlign: "left"}}>全額を繰越し、今月は支払いを行いません。</Typography>
                <Stack spacing={2}>
                <Button
                    size="small"
                    variant="contained"
                    onClick={() => saveCarryOver("all")}
                    disabled={saveDisabled}
                >
                    設定を保存
                </Button>
                </Stack>
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