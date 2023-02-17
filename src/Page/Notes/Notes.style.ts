import { styled } from '@mui/material/styles';

export const NotesRoot = styled('section')(({ theme }) => {
  return {
    display: 'grid',
    gap: theme.spacing(2),
    gridTemplate: `"note-list note-detail"`,
    gridTemplateColumns: '450px 1fr',
  };
});
