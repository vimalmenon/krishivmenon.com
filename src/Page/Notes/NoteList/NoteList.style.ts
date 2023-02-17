import { styled } from '@mui/material/styles';

export const NoteListRoot = styled('section')(({ theme }) => {
  return {
    display: 'grid',
    gap: theme.spacing(2),
  };
});
