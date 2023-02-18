import { FooterStyle, PageLayoutFooterRoot } from './PageLayoutFooter.style';

export const PageLayoutFooter: React.FC = () => {
  return (
    <PageLayoutFooterRoot sx={{ borderColor: 'divider' }}>
      <FooterStyle>&#169; 2023, All rights reserved</FooterStyle>
    </PageLayoutFooterRoot>
  );
};
