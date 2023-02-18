import { grey, blueGrey } from '@mui/material/colors';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';

export const NoteListRoot = styled('section')(({ theme }) => {
  return {
    display: 'flex',
    gap: theme.spacing(2),
    flexDirection: 'column',
    gridArea: 'note-list',
    background: theme.palette.mode === 'dark' ? grey[900] : blueGrey[50],
    padding: theme.spacing(1),
  };
});

export const NoteItemsContainer = styled(List)(({ theme }) => {
  return {
    display: 'flex',
    gap: theme.spacing(1),
    flexDirection: 'column',
  };
});
