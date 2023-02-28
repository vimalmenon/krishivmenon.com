import { styled } from '@mui/material/styles';
import { Spacing } from '@style';

export const PaperStyle = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    width: '400px',
    gap: theme.spacing(Spacing.md),
    padding: theme.spacing(Spacing.md),
    flexDirection: 'column',
    background: theme.custom.background,
  };
});
