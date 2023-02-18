import { styled } from '@mui/material/styles';
import { fontSize } from '@style';

export const PageLayoutFooterRoot = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    gridArea: 'footer',
    padding: theme.spacing(0, 2),
    background: theme.palette.background.paper,
    justifyContent: 'end',
    alignItems: 'center',
  };
});

export const FooterStyle = styled('div')({
  fontSize: fontSize.xs,
});
