import React from 'react';

import { useCommonAuthProvider, useCommonContext } from '@context';
import { navigation } from '@data';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
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
  const { signOut } = useCommonAuthProvider();
  const { profile } = useCommonContext();
  const { NavigationList } = navigation;
  const [collapseNavigation, setCollapseNavigation] = React.useState<boolean>(true);
  const [collapseOthers, setCollapseOthers] = React.useState<boolean>(true);
  return (
    <SideNavigationRoot>
      {profile && (
        <SideNavigationProfile>
          <div className="profile">
            <Avatar alt={profile.name} src={profile.avatar} />
          </div>
          <div className="profile-detail">
            <Typography component="h2">{profile.name}</Typography>
          </div>
        </SideNavigationProfile>
      )}
      <Divider />
      <div>
        <SideNavigationList dense>
          <ListItemButton onClick={() => setCollapseNavigation(!collapseNavigation)}>
            <ListItemText primary="Navigation" />
            <KeyboardArrowDownRoundedIcon />
          </ListItemButton>
          <Collapse in={collapseNavigation}>
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
          </Collapse>
          <Divider />
          <ListItemButton onClick={() => setCollapseOthers(!collapseOthers)}>
            <ListItemText primary="Other" />
            <KeyboardArrowDownRoundedIcon />
          </ListItemButton>
          <Collapse in={collapseOthers}>
            <ListItemButton onClick={signOut}>
              <ListItemIcon>
                <LogoutRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </Collapse>
        </SideNavigationList>
      </div>
    </SideNavigationRoot>
  );
};
