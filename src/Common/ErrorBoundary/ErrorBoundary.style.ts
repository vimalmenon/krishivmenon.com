import { styled } from '@mui/material/styles';

export const ErrorBoundaryBody = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    padding: theme.spacing(2),
  };
});
