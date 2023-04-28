import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//フォームの処理
import { useForm } from "react-hook-form";

type FormValues = {
    userId: string,
    password: string
};

export const UserHome = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <div>
             <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        電気代集金システム（支払い者用）
                    </Typography>
                    <Button color="inherit">ゲスト</Button>
                </Toolbar>
            </AppBar>
            <div className='LoginFormArea'>
            <Container maxWidth="sm">
            <Stack spacing={2}>
                <br></br>
                <h1>ログイン</h1>
                <form onSubmit={onSubmit}>
                <TextField {...register("userId")} id="standard-basic" label="ユーザ名" variant="standard" /><br />
                <TextField 
                    {...register("password")}
                    id="standard-password-input"
                    label="パスワード"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                /><br />
                <Button type='submit'>ログイン</Button>
                </form>
            </Stack>
            </Container>
            </div>
        </div>
    );
}