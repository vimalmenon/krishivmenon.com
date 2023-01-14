import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

import { DrawerWidth } from '../Config/constants';

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (props) => props !== 'open' })(
  ({ theme, open }) => {
    console.log(open, DrawerWidth, MuiDrawer);
    return {
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: DrawerWidth + 'px',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    };
  }
);
