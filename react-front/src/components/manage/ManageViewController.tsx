import { useState } from 'react';

import Container from '@mui/material/Container';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import EditIcon from '@mui/icons-material/Edit';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SettingsIcon from '@mui/icons-material/Settings';

import { ManageViewContents } from './ManageViewContents';
import { ThemeProvider, createTheme } from '@mui/material';

export const ManageViewController = () => {
  const [navigationValue, setNavigationValue] = useState<number>(0);

  const manageTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#fa7414',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '10px',
          },
        },
      },
    },
  });

  return (
    <div>
      <Container maxWidth="md" style={{ height: '70vh' }}>
        <ThemeProvider theme={manageTheme}>
          <ManageViewContents contentsNo={navigationValue} />
          <BottomNavigation
            showLabels
            value={navigationValue}
            onChange={(event, newValue) => {
              setNavigationValue(newValue);
            }}
          >
            <BottomNavigationAction label="請求入力" icon={<EditIcon />} />
            <BottomNavigationAction
              label="請求一覧・処理"
              icon={<FormatListBulletedIcon />}
            />
            <BottomNavigationAction
              label="請求日設定"
              icon={<SettingsIcon />}
            />
          </BottomNavigation>
        </ThemeProvider>
      </Container>
    </div>
  );
};
