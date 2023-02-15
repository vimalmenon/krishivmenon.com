import CssBaseline from '@mui/material/CssBaseline';
import { ReactChildren } from '@types';

import { MainPageLayout, MainPageContent } from './PageLayout.style';
import { PageLayoutHeader, PageLayoutAside, PageLayoutFooter } from '../';

export const PageLayout: React.FC<ReactChildren> = ({ children }) => {
  return (
    <MainPageLayout>
      <CssBaseline />
      <PageLayoutHeader />
      <PageLayoutAside />
      <MainPageContent>content</MainPageContent>
      <PageLayoutFooter />
      {/* <MainPageBody>{children}</MainPageBody> */}
    </MainPageLayout>
  );
};
