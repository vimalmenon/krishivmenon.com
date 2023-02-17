import { styled } from '@mui/material/styles';

export const NoteListRoot = styled('section')(({ theme }) => {
  return {
    display: 'flex',
    gap: theme.spacing(2),
    flexDirection: 'column',
    gridArea: 'note-list',
  };
});
