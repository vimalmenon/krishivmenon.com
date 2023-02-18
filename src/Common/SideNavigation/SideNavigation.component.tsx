import React from 'react';

import { useCommonAuthProvider } from '@context';
import { navigation } from '@data';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/router';

import {
  SideNavigationList,
  SideNavigationProfile,
  SideNavigationRoot,
} from './SideNavigation.style';

export const SideNavigation: React.FC = () => {
  const { push, asPath } = useRouter();
  const { user, signOut } = useCommonAuthProvider();
  const { NavigationList } = navigation;
  const [collapseNavigation] = React.useState<boolean>(true);
  const [collapseOthers] = React.useState<boolean>(true);
  return (
    <SideNavigationRoot>
      {user && (
        <SideNavigationProfile>
          <div className="profile">
            <Avatar alt={user.name} src={user.profile} />
          </div>
          <div className="profile-detail">
            <Typography component="h2">{user.name}</Typography>
          </div>
        </SideNavigationProfile>
      )}
      <Divider></Divider>
      <div>
        <div>Navigation</div>
        <Collapse in={collapseNavigation}>
          <SideNavigationList dense>
            {NavigationList.map((navigation) => {
              if (navigation.show) {
                return (
                  <ListItemButton
                    key={navigation.name}
                    onClick={() => push(navigation.url)}
                    selected={navigation.url === asPath}
                  >
                    <ListItemIcon>
                      <navigation.Icon />
                    </ListItemIcon>
                    <ListItemText primary={navigation.name} />
                  </ListItemButton>
                );
              }
            })}
          </SideNavigationList>
        </Collapse>
      </div>
      <div>
        <div>Others</div>
        <Collapse in={collapseOthers}>
          <SideNavigationList dense>
            <ListItemButton onClick={signOut}>
              <ListItemIcon>
                <LogoutRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </SideNavigationList>
        </Collapse>
      </div>
    </SideNavigationRoot>
  );
};
