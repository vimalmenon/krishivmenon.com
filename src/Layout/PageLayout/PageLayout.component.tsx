import React from 'react';

import { MetaData, ErrorBoundary } from '@common';
import { AuthStatus } from '@constant';
import { useCommonContext } from '@context';
import { navigation } from '@data';
import { useUser } from '@hook';
import CssBaseline from '@mui/material/CssBaseline';
import { Login } from '@page';
import { IBaseLayout, ReactChildren } from '@types';

import { MainPageLayout, MainPageContent, OtherLayout } from './PageLayout.style';
import {
  PageLayoutHeader,
  PageLayoutAside,
  PageLayoutFooter,
  PageLayoutAsideMobile,
  EnvCheck,
} from '../';

export const PageLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  useUser();
  const { authStatus } = useCommonContext();
  if (authStatus === AuthStatus.NotAuthenticated) {
    return (
      <OtherLayout>
        <CssBaseline />
        <MetaData title={navigation.Login.title} />
        <PageLayoutHeader />
        <MainPageContent>
          <Login />
        </MainPageContent>
        <PageLayoutFooter />
      </OtherLayout>
    );
  }
  if (authStatus === AuthStatus.UnAuthorized) {
    return (
      <OtherLayout>
        <CssBaseline />
        <MetaData title={navigation.Unauthenticated.title} />
        <PageLayoutHeader />
        <MainPageContent>
          <div>You are not authorized to this website.</div>
        </MainPageContent>
        <PageLayoutFooter />
      </OtherLayout>
    );
  }
  if (authStatus === AuthStatus.Authenticating) {
    return (
      <OtherLayout>
        <CssBaseline />
        <MetaData title={title} />
        <PageLayoutHeader />
        <MainPageContent>
          <div>Authenticating...</div>
        </MainPageContent>
        <PageLayoutFooter />
      </OtherLayout>
    );
  }
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
