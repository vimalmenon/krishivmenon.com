import { context } from '@context';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Drawer } from '@style';

import { Navigations } from '../../../Config/constants';

export const Sidebar: React.FC = () => {
  const { drawerOpen } = context.useContext();
  return (
    <Drawer variant="permanent" open={drawerOpen}>
      <List component="nav">
        {Navigations.map((nav, key) => {
          return (
            <ListItemButton key={key}>
              <ListItemIcon>
                <nav.Icon />
              </ListItemIcon>
              <ListItemText primary={nav.name} />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
};
