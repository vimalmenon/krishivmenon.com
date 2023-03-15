import { styled } from '@mui/material/styles';

export const PageLayoutHeaderRoot = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    gridArea: 'header',
    padding: theme.spacing(2),
    justifyContent: 'space-between',
    background: theme.custom.background,
    borderBottom: `1px solid ${theme.palette.divider}`,
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
