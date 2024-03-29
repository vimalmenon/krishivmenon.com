import { styled } from '@mui/material/styles';

export const MainPageContent = styled('div')(({ theme }) => {
  return {
    display: 'grid',
    gridArea: 'content',
    padding: theme.spacing(2),
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    overflow: 'auto',
  };
});

export const MainLayout = styled('div')(({ theme }) => ({
  display: 'grid',
  height: '100vh',
  [theme.breakpoints.up('xs')]: {
    gridTemplate: `"header header""content content""footer footer"`,
    gridTemplateColumns: '300px 1fr',
    gridTemplateRows: '60px 1fr 30px',
  },
  [theme.breakpoints.up('sm')]: {
    gridTemplate: `"header header""aside content""footer footer"`,
    gridTemplateColumns: '300px 1fr',
    gridTemplateRows: '60px 1fr 30px',
  },
}));

export const NoAsideLayout = styled('div')(() => ({
  display: 'grid',
  height: '100vh',
  gridTemplate: `"header header""content content""footer footer"`,
  gridTemplateColumns: '300px 1fr',
  gridTemplateRows: '60px 1fr 30px',
}));
