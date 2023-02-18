import { styled } from '@mui/material/styles';

export const NoteDetailRoot = styled('section')(({ theme }) => {
  return {
    display: 'grid',
    gap: theme.spacing(2),
    gridArea: 'note-detail',
  };
});
