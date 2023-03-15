import { styled } from '@mui/material/styles';

export const NoteDetailRoot = styled('section')(({ theme }) => {
  return {
    display: 'grid',
    gap: theme.spacing(2),
    gridArea: 'note-detail',
    background: theme.custom.background,
    padding: theme.spacing(1),
    gridTemplateRows: '1fr',
  };
});

export const NoteDetailSelectedNote = styled('section')(({ theme }) => {
  return {
    display: 'grid',
    gap: theme.spacing(1),
    gridTemplateRows: 'auto 1fr',
  };
});
