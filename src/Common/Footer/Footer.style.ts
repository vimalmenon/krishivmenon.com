import { styled } from '@mui/material/styles';

import { FooterHeight } from '../../Config/constants';
import { fontSize } from '../../Config/styles';

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
