import { useState } from 'react';

import Container from '@mui/material/Container';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { UserViewContents } from './UserViewContents';

export const UserViewController = () => {
    const [navigationValue, setNavigationValue] = useState<number>(0);

    return (
        <div>
            <Container maxWidth="lg">
                <UserViewContents contentsNo={navigationValue} />
                <BottomNavigation
                    showLabels
                    value={navigationValue}
                    onChange={(event, newValue) => {
                        setNavigationValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </BottomNavigation>
            </Container>
        </div>
    );
}