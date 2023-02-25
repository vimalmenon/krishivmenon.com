import { grey, blueGrey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Spacing } from '@style';

export const PaperStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '400px',
  gap: theme.spacing(Spacing.md),
  padding: theme.spacing(Spacing.md),
  flexDirection: 'column',
  background: theme.palette.mode === 'dark' ? grey[900] : blueGrey[50],
}));
