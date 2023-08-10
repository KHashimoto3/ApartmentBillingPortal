import { useState } from 'react';

import Container from '@mui/material/Container';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import EditIcon from '@mui/icons-material/Edit';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SettingsIcon from '@mui/icons-material/Settings';

import { ManageViewContents } from './ManageViewContents';

export const ManageViewController = () => {
    const [navigationValue, setNavigationValue] = useState<number>(0);

    return (
        <div>
            <Container maxWidth="md" style={{height:"70vh"}}>
                <ManageViewContents contentsNo={navigationValue} />
                <BottomNavigation
                    showLabels
                    value={navigationValue}
                    onChange={(event, newValue) => {
                        setNavigationValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="請求入力" icon={<EditIcon />} />
                    <BottomNavigationAction label="請求一覧・処理" icon={<FormatListBulletedIcon />} />
                    <BottomNavigationAction label="請求日設定" icon={<SettingsIcon />} />
                </BottomNavigation>
            </Container>
        </div>
    );
}