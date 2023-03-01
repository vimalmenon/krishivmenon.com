import { styled } from '@mui/material/styles';

export const GalleryRoot = styled('section')(({ theme }) => {
  return {
    display: 'grid',
    gap: theme.spacing(2),
    gridTemplate: `"gallery-header" "gallery-content"`,
    gridTemplateRows: 'auto 1fr',
  };
});
