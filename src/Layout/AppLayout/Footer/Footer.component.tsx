import MuiContainer from '@mui/material/Container';
import { Container } from '@style';

import { FooterStyle } from './Footer.style';

export const Footer: React.FC = () => {
  return (
    <Container component={'footer'} sx={{ flex: '0 0 40px' }}>
      <MuiContainer maxWidth="lg">
        <FooterStyle>&#169; 2023, All rights reserved</FooterStyle>
      </MuiContainer>
    </Container>
  );
};
