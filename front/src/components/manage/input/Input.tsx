import { Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

import { BillingData } from "../../types/BillingData";
import { useState } from "react";

interface BillInputList {
    no: number;
    name: string;
    useAmount: number;
    price: number;
    beforeCarryOver: number;
}

export const Input = () => {
    const [listData, setListData] = useState<BillInputList[]>([
      {no: 1, name: "井上 太郎", useAmount: 0, price: 0, beforeCarryOver: 2000},
      {no: 2, name: "鈴木 太郎", useAmount: 0, price: 0, beforeCarryOver: 0},
      {no: 3, name: "山田 太郎", useAmount: 0, price: 0, beforeCarryOver: 3500},
      {no: 4, name: "高橋 太郎", useAmount: 0, price: 0, beforeCarryOver: 3500},
      {no: 5, name: "福島 太郎", useAmount: 0, price: 0, beforeCarryOver: 3500},
      {no: 6, name: "宮城 太郎", useAmount: 0, price: 0, beforeCarryOver: 3500},
      {no: 7, name: "大阪 太郎", useAmount: 0, price: 0, beforeCarryOver: 3500},
  ]);

  const updateAmount = (updatedItem: BillInputList) => {
    setListData(prevListData =>
      prevListData.map(item =>
        item.no === updatedItem.no ? { ...item, ...updatedItem } : item
      )
    );
    console.log("更新しました。")
  };

  const updatePrice = (updatedItem: BillInputList) => {
    setListData(prevListData =>
      prevListData.map(item =>
        item.no === updatedItem.no ? { ...item, ...updatedItem } : item
      )
    );
    console.log("更新しました。")
  };

    return (
        <Container sx={{width: "90%", height: "100%", marginTop: "30px"}}>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Typography variant="h4">請求入力</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        size="medium"
                        variant="contained"
                        onClick={() => alert("保存しました。")}
                    >
                        保存
                    </Button>
                </Grid>
            </Grid>
            <Container sx={{width: "100%", height: "90%", overflowY: "scroll"}}>
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ minWidth: 50, fontWeight: "bold" }}  align="center">部屋No.</TableCell>
              <TableCell sx={{ minWidth: 100 }} align="center">氏名</TableCell>
              <TableCell align="center">使用量</TableCell>
              <TableCell sx={{ minWidth: 70 }} align="center">金額</TableCell>
              <TableCell sx={{ minWidth: 70 }} align="center">繰越金</TableCell>
              <TableCell sx={{ minWidth: 70, fontWeight: "bold" }} align="center">合計額</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listData.map((data, idx) => (
              <TableRow
                key={data.no}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ minWidth: 50, fontWeight: "bold" }}  component="th" scope="row" align="center">
                  {data.no}
                </TableCell>
                <TableCell sx={{ minWidth: 100 }} align="center">{data.name}</TableCell>
                <TableCell component="th" scope="row" align="center">
                  <input type="text" size={5} onChange={(event) => updateAmount({ ...data, useAmount: Number(event.target.value) })} value={data.useAmount} />
                </TableCell>
                <TableCell sx={{ minWidth: 70 }} component="th" scope="row" align="center">
                  ￥<input type="text" size={5} onChange={(event) => updatePrice({ ...data, price: Number(event.target.value) })} value={data.price} />
                </TableCell>
                <TableCell sx={{ minWidth: 70 }} component="th" scope="row" align="center">￥{data.beforeCarryOver}</TableCell>
                <TableCell sx={{ minWidth: 70, fontWeight: "bold" }} component="th" scope="row" align="center">￥{data.beforeCarryOver + data.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
        </Container>
    )
}