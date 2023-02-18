import { grey, blueGrey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { fontSize } from '@style';

export const PageLayoutFooterRoot = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    gridArea: 'footer',
    padding: theme.spacing(0, 2),
    alignItems: 'center',
    background: theme.palette.mode === 'dark' ? grey[900] : blueGrey[50],
    borderRight: `1px solid`,
  };
});

export const FooterStyle = styled('div')({
  fontSize: fontSize.xs,
});
