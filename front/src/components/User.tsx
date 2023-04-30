import { useContext } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import { LoginForm } from './LoginForm';
import { UserViewController } from './user/UserViewController';

import { LoginFlagContext } from './providers/LoginFlagProvider';

import './User.scss';

export const User = () => {
    const {loginFlag, setLoginFlag} = useContext(LoginFlagContext);

    return (
        <div className='AppArea'>
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
                    { /*ログイン状態に応じてボタンを切り替える*/ }
                    {loginFlag? (
                        <Button color="inherit" onClick={() => setLoginFlag(false)}>ログアウト</Button>
                    ) : <Button color="inherit">ログイン</Button>  }
                </Toolbar>
            </AppBar>
            { /*ログイン状態に応じて表示を切り替える*/ }
            {loginFlag? <UserViewController /> : <LoginForm />}
        </div>
    );
}