import { grey, blueGrey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

export const NoteHeaderRoot = styled('section')(({ theme }) => {
  return {
    display: 'grid',
    gridArea: 'note-header',
    background: theme.palette.mode === 'dark' ? grey[900] : blueGrey[50],
    justifyContent: 'end',
    alignItems: 'center',
  };
});
