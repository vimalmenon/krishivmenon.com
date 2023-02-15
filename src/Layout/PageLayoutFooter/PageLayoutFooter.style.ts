import { styled } from '@mui/material/styles';

export const PageLayoutFooterRoot = styled('div')(({ theme }) => {
  return {
    gridArea: 'footer',
    padding: theme.spacing(2),
    background: theme.palette.background.paper,
  };
});
