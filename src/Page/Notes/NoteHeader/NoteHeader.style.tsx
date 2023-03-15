import { styled } from '@mui/material/styles';

export const NoteHeaderRoot = styled('section')(({ theme }) => {
  return {
    display: 'grid',
    gridArea: 'note-header',
    background: theme.custom.background,
    justifyContent: 'end',
    alignItems: 'center',
  };
});
