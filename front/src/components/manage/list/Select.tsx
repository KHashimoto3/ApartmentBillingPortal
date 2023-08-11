import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

type Props = {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    userId: string;
    setUserId: React.Dispatch<React.SetStateAction<string>>;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
}

interface BillListData {
    no: number;
    userId: string;
    name: string;
    finalPrice: number;
    paid: number;
}

export const Select = (props: Props) => {
    const setStep = props.setStep;
    const setUserId = props.setUserId;
    const setUserName = props.setUserName;

    const listData: BillListData[] = [
        {no: 1, userId: "test1", name: "山田 太郎", finalPrice: 3500, paid: 0},
        {no: 2, userId: "test2", name: "鈴木 太郎", finalPrice: 4000, paid: 1},
        {no: 3, userId: "test3", name: "高橋 太郎", finalPrice: 3500, paid: 2},
    ];

    return (
        <Container sx={{width: "90%", height: "100%", marginTop: "30px"}}>
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
                onClick={() => {setUserId(data.userId); setUserName(data.name); setStep(1);}}
                key={data.no}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                style={{cursor: "pointer"}}
              >
                <TableCell component="th" scope="row" align="center">
                  {data.no}
                </TableCell>
                <TableCell sx={{ minWidth: 150 }} align="center">{data.name}</TableCell>
                <TableCell align="right">￥{data.finalPrice}</TableCell>
                {(() => {
                if (data.paid === 0) {
                    return (
                        <TableCell align="right"><HorizontalRuleIcon /></TableCell>
                    )
                } else if (data.paid === 1) {
                    return (
                        <TableCell align="right"><CheckIcon /></TableCell>
                    )
                } else if (data.paid === 2) {
                    return (
                        <TableCell align="right"><ChangeCircleIcon /></TableCell>
                    )
                } else {
                    return (
                        <TableCell align="right"></TableCell>
                    )
                }
            })()}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Container>
    )
}