import React from 'react';

import { MetaData, ErrorBoundary } from '@common';
import CssBaseline from '@mui/material/CssBaseline';
import { IBaseLayout, ReactChildren } from '@types';

import { MainPageLayout, MainPageContent } from './PageLayout.style';
import {
  PageLayoutHeader,
  PageLayoutAside,
  PageLayoutFooter,
  PageLayoutAsideMobile,
  EnvCheck,
} from '../';

export const PageLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  return (
    <MainPageLayout>
      <CssBaseline />
      <MetaData title={title} />
      <PageLayoutHeader />
      <ErrorBoundary
        sx={{
          gridArea: 'content',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <EnvCheck>
          <PageLayoutAside />
          <PageLayoutAsideMobile />
          <MainPageContent>
            <ErrorBoundary>{children}</ErrorBoundary>
          </MainPageContent>
        </EnvCheck>
      </ErrorBoundary>
      <PageLayoutFooter />
    </MainPageLayout>
  );
};
