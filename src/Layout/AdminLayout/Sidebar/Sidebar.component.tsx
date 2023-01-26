import { Navigations } from '@constant';
import { context } from '@context';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Drawer } from '@style';
import { useRouter } from 'next/router';

export const Sidebar: React.FC = () => {
  const { drawerOpen } = context.useContext();
  const { push, asPath } = useRouter();
  return (
    <Drawer variant="permanent" open={drawerOpen}>
      <List component="nav">
        {Navigations.map((nav) => {
          if (nav.show) {
            return (
              <ListItemButton
                key={nav.name}
                onClick={() => push(nav.url)}
                selected={nav.url === asPath}
              >
                <ListItemIcon>
                  <nav.Icon />
                </ListItemIcon>
                <ListItemText primary={nav.name} />
              </ListItemButton>
            );
          }
        })}
      </List>
    </Drawer>
  );
};
