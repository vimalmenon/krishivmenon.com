import { FooterStyle, PageLayoutFooterRoot } from './PageLayoutFooter.style';
import packageJson from "../../../package.json";

export const PageLayoutFooter: React.FC = () => {
  return (
    <PageLayoutFooterRoot sx={{ borderColor: 'divider' }}>
      <FooterStyle>&#169; 2023, All rights reserved v{packageJson.version}</FooterStyle>
    </PageLayoutFooterRoot>
  );
};
