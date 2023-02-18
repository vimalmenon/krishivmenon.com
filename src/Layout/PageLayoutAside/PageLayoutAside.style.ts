import { grey, blueGrey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

export const PageLayoutAsideRoot = styled('div')(({ theme }) => {
  return {
    gridArea: 'aside',
    padding: theme.spacing(1),
    background: theme.palette.mode === 'dark' ? grey[900] : blueGrey[50],
    borderRight: `1px solid`,
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  };
});
