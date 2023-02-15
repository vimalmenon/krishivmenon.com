import { Navigations } from '@constant';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/router';

import { SideNavigationList, SideNavigationRoot } from './SideNavigation.style';

export const SideNavigation: React.FC = () => {
  const { push, asPath } = useRouter();
  return (
    <SideNavigationRoot>
      <SideNavigationList dense>
        {Navigations.map((navigation) => {
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
        })}
      </SideNavigationList>
    </SideNavigationRoot>
  );
};
