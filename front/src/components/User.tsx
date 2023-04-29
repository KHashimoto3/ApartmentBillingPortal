import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import { LoginForm } from './LoginForm';
import { UserHome } from './user/UserHome';

export const User = () => {
    const [loginStatus, setLoginStatus] = useState<Boolean>(true);

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
            { /*ログイン状態に応じて表示を切り替える*/ }
            {loginStatus? <UserHome /> : <LoginForm />}
        </div>
    );
}