import { MetaData } from '@common';
import CssBaseline from '@mui/material/CssBaseline';
import { IBaseLayout, ReactChildren } from '@types';

import { MainPageLayout, MainPageContent } from './PageLayout.style';
import { PageLayoutHeader, PageLayoutAside, PageLayoutFooter } from '../';

export const PageLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  return (
    <MainPageLayout>
      <CssBaseline />
      <MetaData title={title} />
      <PageLayoutHeader />
      <PageLayoutAside />
      <MainPageContent>{children}</MainPageContent>
      <PageLayoutFooter />
    </MainPageLayout>
  );
};
