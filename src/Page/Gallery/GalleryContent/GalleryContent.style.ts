import { styled } from '@mui/material/styles';

export const GalleryContentRoot = styled('section')(({ theme }) => {
  return {
    display: 'grid',
    gap: theme.spacing(2),
    gridArea: 'gallery-content',
    gridTemplate: `"gallery-content-files gallery-content-extra"`,
    gridTemplateColumns: '1fr auto',
    gridTemplateRows: '1fr',
  };
});

export const GalleryContentFiles = styled('div')(({ theme }) => {
  return {
    display: 'grid',
    gap: theme.spacing(2),
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  };
});

export const GalleryContentFilesRoot = styled('div')(({ theme }) => {
  return {
    display: 'grid',
    gridArea: 'gallery-content-files',
    gap: theme.spacing(2),
    gridTemplateRows: 'auto 1fr',
  };
});

export const GalleryContentExtra = styled('div')(() => {
  return {
    gridArea: 'gallery-content-extra',
    display: 'flex',
    flex: '1 1 100%',
  };
});
