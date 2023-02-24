import { styled } from '@mui/material/styles';

export const GalleryContentRoot = styled('section')(({ theme }) => {
  return {
    display: 'grid',
    gap: theme.spacing(2),
    gridArea: 'gallery-content',
  };
});
