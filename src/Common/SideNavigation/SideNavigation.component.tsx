import React from 'react';

import { Icon, Profile } from '@common';
import { useCommonAuthProvider } from '@context';
import { navigation } from '@data';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/router';

import { SideNavigationList, SideNavigationRoot } from './SideNavigation.style';

export const SideNavigation: React.FC = () => {
  const { push, asPath } = useRouter();
  const { signOut } = useCommonAuthProvider();
  const { NavigationList } = navigation;
  const [collapseNavigation, setCollapseNavigation] = React.useState<boolean>(true);
  const [collapseOthers, setCollapseOthers] = React.useState<boolean>(true);
  return (
    <SideNavigationRoot>
      <Profile />
      <Divider />
      <SideNavigationList dense>
        <ListItemButton onClick={() => setCollapseNavigation(!collapseNavigation)}>
          <ListItemText primary="Navigation" />
          {collapseNavigation ? <Icon.icons.UpArrow /> : <Icon.icons.DownArrow />}
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
          {collapseOthers ? <Icon.icons.UpArrow /> : <Icon.icons.DownArrow />}
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
    </SideNavigationRoot>
  );
};
