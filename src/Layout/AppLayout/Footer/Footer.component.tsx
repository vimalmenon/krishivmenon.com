import { Footer as FooterCommon } from '@common';
import { Container } from '@style';

import { FooterContainer } from './Footer.style';

export const Footer: React.FC = () => {
  return (
    <Container component={'footer'} sx={{ flex: '0 0 40px' }}>
      <FooterContainer maxWidth="lg">
        <FooterCommon />
      </FooterContainer>
    </Container>
  );
};
