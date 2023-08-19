import { useState } from 'react';

import {
  Container,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import { UserViewContents } from './UserViewContents';

export const UserViewController = () => {
  const [navigationValue, setNavigationValue] = useState<number>(0);

  return (
    <div>
      <Container maxWidth="md" style={{ height: '70vh' }}>
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
          <BottomNavigationAction
            label="請求日設定"
            icon={<FormatListBulletedIcon />}
          />
        </BottomNavigation>
      </Container>
    </div>
  );
};
