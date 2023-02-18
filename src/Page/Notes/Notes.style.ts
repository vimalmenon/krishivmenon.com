import { styled } from '@mui/material/styles';

export const NotesRoot = styled('section')(({ theme }) => {
  return {
    display: 'grid',
    gap: theme.spacing(2),
    gridTemplate: `"note-header note-header" "note-list note-detail"`,
    gridTemplateColumns: '450px 1fr',
    gridTemplateRows: '50px 1fr',
  };
});
