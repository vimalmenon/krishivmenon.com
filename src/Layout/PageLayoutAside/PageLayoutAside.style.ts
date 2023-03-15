import { styled } from '@mui/material/styles';

export const PageLayoutAsideRoot = styled('aside')(({ theme }) => {
  return {
    gridArea: 'aside',
    padding: theme.spacing(1),
    background: theme.custom.background,
    borderRight: `1px solid ${theme.palette.divider}`,
    overflow: 'auto',
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  };
});
