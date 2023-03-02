import { styled } from '@mui/material/styles';

export const GalleryHeaderRoot = styled('section')(({ theme }) => {
  return {
    display: 'grid',
    gap: theme.spacing(2),
    gridArea: 'gallery-header',
    justifyContent: 'space-between',
    gridAutoFlow: 'column',
    alignItems: 'center',
  };
});
