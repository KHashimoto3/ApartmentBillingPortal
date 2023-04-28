import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import TextField from '@mui/material/TextField';

export const UserHome = () => {
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
                <h1>ログイン</h1>
                <TextField id="standard-basic" label="ユーザ名" variant="standard" /><br />
                <TextField
                    id="standard-password-input"
                    label="パスワード"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                /><br />
                <Button>ログイン</Button>
            </div>
        </div>
    );
}