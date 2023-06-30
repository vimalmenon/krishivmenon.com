import { styled } from '@mui/material/styles';

export const FolderStyleRoot = styled('div')(({ theme }) => {
  return {
    border: `1px solid ${theme.palette.divider}`,
    height: '150px',
    display: 'grid',
    borderRadius: '15px',
    padding: theme.spacing(1.5),
    cursor: 'pointer',
    userSelect: 'none',
    gridTemplate: `"folder-icon" "folder-label" "folder-detail"`,
    gridTemplateRows: '1fr auto auto',
    '&.active': {
      background: theme.custom.background,
    },
  };
});

export const FolderIconStyle = styled('div')(() => {
  return {
    gridArea: 'folder-icon',
    display: 'flex',
    justifyContent: 'space-between',
  };
});

export const FolderLabelStyle = styled('div')(() => {
  return {
    gridArea: 'folder-label',
  };
});

export const FolderDetailStyle = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    gridArea: 'folder-detail',
    fontSize: '12px',
  };
});
