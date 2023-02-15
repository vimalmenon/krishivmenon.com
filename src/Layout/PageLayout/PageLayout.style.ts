import { styled } from '@mui/material/styles';

export const MainPageLayout = styled('div')(({ theme }) => ({
  display: 'grid',
  minHeight: '100vh',
  [theme.breakpoints.up('xs')]: {
    gridTemplate: `"header header header""content content content""footer footer footer"`,
    gridTemplateColumns: '300px 1fr',
    gridTemplateRows: '60px 1fr 50px',
  },
  [theme.breakpoints.up('sm')]: {
    gridTemplate: `"header header header""aside content content""aside footer footer"`,
    gridTemplateColumns: '300px 1fr',
    gridTemplateRows: '60px 1fr 50px',
  },
}));

export const MainPageContent = styled('div')(({ theme }) => {
  return {
    display: 'grid',
    gridArea: 'content',
    padding: theme.spacing(2),
  };
});
