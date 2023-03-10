import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

import { DrawerWidth } from './constants';
import { IAppBar } from './style';

export const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })<IAppBar>(
  ({ theme, open }) => {
    return {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
        marginLeft: DrawerWidth,
        width: `calc(100% - ${DrawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    };
  }
);
