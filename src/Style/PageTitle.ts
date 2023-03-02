import { styled } from '@mui/material/styles';
import { fontSize } from '@style';

export const PageTitle = styled('section')(() => {
  return {
    fontSize: fontSize.lg,
    fontWeight: 800,
    alignItems: 'center',
  };
});
