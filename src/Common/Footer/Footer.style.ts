import { styled } from '@mui/material/styles';
import { fontSize, FooterHeight } from '@style';

export const FooterStyle = styled('div')({
  fontSize: fontSize.xs,
});

export const FooterContainer = styled('footer')(({ theme }) => ({
  display: 'flex',
  flex: `0 0 ${FooterHeight}px`,
  justifyContent: 'end',
  alignItems: 'center',
  margin: theme.spacing(0, 2),
}));
