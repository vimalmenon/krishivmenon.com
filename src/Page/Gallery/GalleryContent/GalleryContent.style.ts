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
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  };
});
export const GalleryContentFilesStyle = styled('div')(({ theme }) => {
  return {
    gap: theme.spacing(2),
    display: 'grid',
    flexWrap: 'wrap',
    gridTemplateColumns: 'repeat(1, 1fr)',
    margin: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
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
