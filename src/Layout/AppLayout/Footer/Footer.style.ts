import MuiContainer from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import { fontSize } from '../../../Config/styles';

export const FooterStyle = styled('div')({
  fontSize: fontSize.xs,
});

export const FooterContainer = styled(MuiContainer)({
  display: 'flex',
  alignItems: 'center',
});
