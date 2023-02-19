import { grey, blueGrey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

export const NoteDetailRoot = styled('section')(({ theme }) => {
  return {
    display: 'grid',
    gap: theme.spacing(2),
    gridArea: 'note-detail',
    background: theme.palette.mode === 'dark' ? grey[900] : blueGrey[50],
    padding: theme.spacing(1),
    gridTemplateRows: '1fr',
  };
});

export const NoteDetailSelectedNote = styled('section')(({ theme }) => {
  return {
    display: 'grid',
    gap: theme.spacing(2),
    gridTemplateRows: 'auto 1fr',
  };
});
