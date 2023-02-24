import { styled } from '@mui/material/styles';

export const GalleryContentRoot = styled('section')(({ theme }) => {
  return {
    display: 'grid',
    gap: theme.spacing(2),
    gridArea: 'gallery-content',
    gridTemplate: `"gallery-content-files" "gallery-content-extra"`,
    gridTemplateColumns: '1fr auto',
    gridTemplateRows: '1fr',
  };
});
