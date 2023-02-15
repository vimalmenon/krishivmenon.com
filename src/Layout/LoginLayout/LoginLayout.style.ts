import { styled } from '@mui/material/styles';

export const LoginLayoutRoot = styled('div')(() => ({
  display: 'grid',
  minHeight: '100vh',
  gridTemplate: `"header" "content" "footer"`,
  gridTemplateColumns: '1fr',
  gridTemplateRows: '60px 1fr 50px',
}));
