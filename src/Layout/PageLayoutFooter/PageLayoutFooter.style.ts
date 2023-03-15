import { styled } from '@mui/material/styles';
import { fontSize } from '@style';

export const PageLayoutFooterRoot = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    gridArea: 'footer',
    padding: theme.spacing(0, 2),
    alignItems: 'center',
    background: theme.custom.background,
    borderTop: `1px solid ${theme.palette.divider}`,
    justifyContent: 'end',
  };
});

export const FooterStyle = styled('div')({
  fontSize: fontSize.xs,
});
