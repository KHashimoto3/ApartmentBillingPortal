import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

interface BillListData {
    no: number;
    userId: string;
    name: string;
    finalPrice: number;
    paid: number;
}

export const Select = () => {
    const listData: BillListData[] = [
        {no: 0, userId: "test1", name: "山田 太郎", finalPrice: 3500, paid: 0},
        {no: 1, userId: "test2", name: "鈴木太郎", finalPrice: 4000, paid: 1}
    ];

    return (
        <Container sx={{width: "90%", marginTop: "30px"}}>
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">部屋No.</TableCell>
              <TableCell sx={{ minWidth: 150 }} align="center">氏名</TableCell>
              <TableCell align="right">請求予定額</TableCell>
              <TableCell align="right">チェック</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listData.map((data) => (
              <TableRow
                key={data.no}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {data.no}
                </TableCell>
                <TableCell sx={{ minWidth: 150 }} align="center">{data.name}</TableCell>
                <TableCell align="right">￥{data.finalPrice}</TableCell>
                <TableCell align="right">チェック</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Container>
    )
}