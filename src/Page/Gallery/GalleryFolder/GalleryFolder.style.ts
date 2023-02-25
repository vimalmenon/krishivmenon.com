import { grey, blueGrey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

export const FolderStyleRoot = styled('div')(({ theme }) => {
  return {
    border: '1px solid gray',
    height: '150px',
    display: 'grid',
    borderRadius: '15px',
    padding: theme.spacing(1.5),
    cursor: 'pointer',
    userSelect: 'none',
    gridTemplate: `"folder-icon" "folder-label" "folder-detail"`,
    gridTemplateRows: '1fr auto auto',
    '&.active': {
      background: theme.palette.mode === 'dark' ? grey[900] : blueGrey[50],
    },
  };
});

export const FolderIconStyle = styled('div')(() => {
  return {
    gridArea: 'folder-icon',
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
