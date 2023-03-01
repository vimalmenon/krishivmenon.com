import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Spacing } from '@style';

export const PaperStyle = styled(Paper)(({ theme }) => ({
  display: 'flex',
  width: '400px',
  gap: theme.spacing(Spacing.md),
  padding: theme.spacing(Spacing.md),
  border: `1px solid ${theme.palette.divider}`,
  flexDirection: 'column',
}));
