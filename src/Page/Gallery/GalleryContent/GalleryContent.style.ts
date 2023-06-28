import { styled } from '@mui/material/styles';

export const GalleryContentRoot = styled('section')(({ theme }) => {
  return {
    display: 'grid',
    gap: theme.spacing(2),
    gridArea: 'gallery-content',
    gridTemplate: `"gallery-content-files gallery-content-extra"`,
    gridTemplateColumns: '1fr auto',
    gridTemplateRows: '1fr',
    overflow: 'auto',
  };
});

export const GalleryContentFolderStyle = styled('div')(({ theme }) => {
  return {
    display: 'grid',
    gap: theme.spacing(2),
    gridTemplateColumns: 'repeat(auto-fill, 300px)',
  };
});
export const GalleryContentFilesStyle = styled('div')(({ theme }) => {
  return {
    gap: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
  };
});

export const GalleryContentFilesRoot = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    gridArea: 'gallery-content-files',
    gap: theme.spacing(2),
    flexDirection: 'column',
  };
});
