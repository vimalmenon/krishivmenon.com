import { styled } from '@mui/material/styles';

export const PageLayoutFooterRoot = styled('div')(({ theme }) => {
  console.log(theme);
  return {
    gridArea: 'footer',
    padding: theme.spacing(2),
    background: theme.palette.background.paper,
  };
});
