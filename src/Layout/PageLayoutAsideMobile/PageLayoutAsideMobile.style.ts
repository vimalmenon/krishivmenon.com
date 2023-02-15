import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

export const PageLayoutAsideMobileRoot = styled(Drawer)(({ theme }) => {
  return {
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: 260,
    },
  };
});
