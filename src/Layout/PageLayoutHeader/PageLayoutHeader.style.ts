import { grey, blueGrey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

export const PageLayoutHeaderRoot = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    gridArea: 'header',
    padding: theme.spacing(2),
    justifyContent: 'space-between',
    background: theme.palette.mode === 'dark' ? grey[900] : blueGrey[50],
    borderBottom:
      theme.palette.mode === 'dark' ? `1px solid ${grey[700]}` : `1px solid ${blueGrey[200]}`,
  };
});

export const PageLayoutHeaderTitle = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
}));

export const PageLayoutHeaderSide = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
}));
