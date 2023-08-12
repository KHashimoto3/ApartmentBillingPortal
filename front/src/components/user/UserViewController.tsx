import { useState } from 'react';

import Container from '@mui/material/Container';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import { UserViewContents } from './UserViewContents';
import { ThemeProvider, createTheme } from '@mui/material';

export const UserViewController = () => {
    const [navigationValue, setNavigationValue] = useState<number>(0);

    const userNavTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#26c988'
            }
        }
    })

    return (
        <div>
            <Container maxWidth="md" style={{height:"70vh"}}>
                <ThemeProvider theme={userNavTheme}>
                <UserViewContents contentsNo={navigationValue} />
                <BottomNavigation
                    showLabels
                    value={navigationValue}
                    onChange={(event, newValue) => {
                        setNavigationValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="請求入力" icon={<HomeIcon />} />
                    <BottomNavigationAction label="請求一覧" icon={<CurrencyYenIcon />} />
                    <BottomNavigationAction label="請求日設定" icon={<FormatListBulletedIcon />} />
                </BottomNavigation>
                </ThemeProvider>
            </Container>
        </div>
    );
}