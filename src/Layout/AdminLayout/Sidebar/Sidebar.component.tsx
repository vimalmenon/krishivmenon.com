import { context } from '@common';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
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
              <ListItemText primary={nav.name} />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
};
