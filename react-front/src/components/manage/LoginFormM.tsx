import { useContext } from 'react';
import { LoginFlagContext } from '../providers/LoginFlagProvider';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//フォームの処理
import { useForm } from "react-hook-form";
import { ThemeProvider, createTheme } from '@mui/material';

type FormValues = {
    userId: string,
    password: string
};

export const LoginFormM = () => {
    const {setLoginFlag} = useContext(LoginFlagContext);

    const { register, handleSubmit} = useForm<FormValues>();
    const onSubmit = handleSubmit((data) => {
        if(data.userId === 'test' && data.password === '1234'){
            setLoginFlag(true);
        }
    });

    const loginTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#000'
            }
        }
    })

    return (
        <Container maxWidth="sm">
            <form onSubmit={onSubmit}>
            <ThemeProvider theme={loginTheme}>
            <Stack spacing={2}>
                <br></br>
                <h1>ログイン</h1>
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
            </Stack>
            </ThemeProvider>
            </form>
            </Container>
    );
}