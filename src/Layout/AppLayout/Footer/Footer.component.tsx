import MuiContainer from '@mui/material/Container';

import { Container } from '../../../Style/Container';
import { FooterStyle } from './Footer.style';

export const Footer: React.FC = () => {
  return (
    <Container component={'footer'} sx={{ flex: '0 0 20px' }}>
      <MuiContainer maxWidth="lg">
        <FooterStyle>copywrite @ 2023, all rights reserved</FooterStyle>
      </MuiContainer>
    </Container>
  );
};
