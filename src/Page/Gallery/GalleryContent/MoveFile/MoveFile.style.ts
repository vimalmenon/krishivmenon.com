import { styled } from '@mui/material/styles';

export const FolderStyleRoot = styled('div')(({ theme }) => {
  return {
    border: `1px solid ${theme.palette.divider}`,
    flex: '0 0 30%',
    cursor: 'pointer',
    margin: theme.spacing(1.5, 0),
    padding: theme.spacing(1.5),
    '&.active': {
      background: theme.custom.background,
    },
  };
});
