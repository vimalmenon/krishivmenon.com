import List from '@mui/material/List';
import { styled } from '@mui/material/styles';

export const NoteListRoot = styled('section')(({ theme }) => {
  return {
    display: 'flex',
    gap: theme.spacing(2),
    flexDirection: 'column',
    gridArea: 'note-list',
    background: theme.custom.background,
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
