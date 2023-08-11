import { Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

import { BillingData } from "../../types/BillingData";

interface BillInputList {
    no: number;
    name: string;
    useAmount: number;
    price: number;
    beforeCarryOver: number;
    finalPrice: number;
}

export const Input = () => {
    const listData: BillInputList[] = [
        {no: 1, name: "井上 太郎", useAmount: 0, price: 0, beforeCarryOver: 2000, finalPrice: 0},
        {no: 2, name: "鈴木 太郎", useAmount: 0, price: 0, beforeCarryOver: 0, finalPrice: 0},
        {no: 3, name: "田中 太郎", useAmount: 0, price: 0, beforeCarryOver: 3500, finalPrice: 0},
    ];

    return (
        <Container sx={{width: "90%", height: "100%", marginTop: "30px"}}>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Typography variant="h4">請求入力</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        size="small"
                        variant="contained"
                        onClick={() => alert("保存しました。")}
                    >
                        保存
                    </Button>
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ minWidth: 50 }}  align="center">部屋No.</TableCell>
              <TableCell sx={{ minWidth: 100 }} align="center">氏名</TableCell>
              <TableCell align="center">使用量</TableCell>
              <TableCell sx={{ minWidth: 70 }} align="center">金額</TableCell>
              <TableCell sx={{ minWidth: 70 }} align="center">繰越金</TableCell>
              <TableCell sx={{ minWidth: 70 }} align="center">合計額</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listData.map((data) => (
              <TableRow
                key={data.no}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ minWidth: 50 }}  component="th" scope="row" align="center">
                  {data.no}
                </TableCell>
                <TableCell sx={{ minWidth: 100 }} align="center">{data.name}</TableCell>
                <TableCell component="th" scope="row" align="center">
                  <input type="text" size={5} value={data.useAmount} />
                </TableCell>
                <TableCell sx={{ minWidth: 70 }} component="th" scope="row" align="center">
                  ￥<input type="text" size={5} value={data.price} />
                </TableCell>
                <TableCell sx={{ minWidth: 70 }} component="th" scope="row" align="center">￥{data.beforeCarryOver}</TableCell>
                <TableCell sx={{ minWidth: 70 }} component="th" scope="row" align="center">￥{data.finalPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Container>
    )
}