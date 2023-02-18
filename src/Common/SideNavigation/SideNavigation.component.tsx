import { useCommonAuthProvider } from '@context';
import { navigation } from '@data';
import Avatar from '@mui/material/Avatar';
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
  const { user } = useCommonAuthProvider();
  const { NavigationList } = navigation;
  return (
    <SideNavigationRoot>
      {user && (
        <SideNavigationProfile>
          <div className="profile">
            <Avatar alt={user.name} src={user.profile} />
          </div>
          <div className="profile-detail">{user.name}</div>
        </SideNavigationProfile>
      )}
      <Divider></Divider>
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
    </SideNavigationRoot>
  );
};
