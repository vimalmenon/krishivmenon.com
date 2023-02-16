import React from 'react';

import { MetaData } from '@common';
import { ErrorBoundaryProvider } from '@context';
import CssBaseline from '@mui/material/CssBaseline';
import { IBaseLayout, ReactChildren } from '@types';

import { MainPageLayout, MainPageContent } from './PageLayout.style';
import { PageLayoutHeader, PageLayoutAside, PageLayoutFooter, PageLayoutAsideMobile } from '../';

export const PageLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  return (
    <MainPageLayout>
      <CssBaseline />
      <MetaData title={title} />
      <PageLayoutAsideMobile />
      <PageLayoutHeader />
      <PageLayoutAside />
      <MainPageContent>
        <ErrorBoundaryProvider>{children}</ErrorBoundaryProvider>
      </MainPageContent>
      <PageLayoutFooter />
    </MainPageLayout>
  );
};
