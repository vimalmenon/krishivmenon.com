import { Container } from '@style';

import { FooterStyle, FooterContainer } from './Footer.style';

export const Footer: React.FC = () => {
  return (
    <Container component={'footer'} sx={{ flex: '0 0 40px' }}>
      <FooterContainer maxWidth="lg">
        <FooterStyle>&#169; 2023, All rights reserved</FooterStyle>
      </FooterContainer>
    </Container>
  );
};
