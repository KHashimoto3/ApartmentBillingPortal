import { useState } from 'react';

import Container from '@mui/material/Container';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import { UserViewContents } from './UserViewContents';

export const UserViewController = () => {
    const [navigationValue, setNavigationValue] = useState<number>(0);

    return (
        <div>
            <Container maxWidth="lg" style={{height:"70vh"}}>
                <UserViewContents contentsNo={navigationValue} />
                <BottomNavigation
                    showLabels
                    value={navigationValue}
                    onChange={(event, newValue) => {
                        setNavigationValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="ホーム" icon={<HomeIcon />} />
                    <BottomNavigationAction label="今月の請求" icon={<CurrencyYenIcon />} />
                    <BottomNavigationAction label="請求履歴" icon={<FormatListBulletedIcon />} />
                </BottomNavigation>
            </Container>
        </div>
    );
}