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
  const { authStatus } = useCommonContext();
  if (authStatus === AuthStatus.NotAuthenticated) {
    return (
      <OtherPage title={navigation.Login.title}>
        <Login />
      </OtherPage>
    );
  }
  if (authStatus === AuthStatus.UnAuthorized) {
    return (
      <UnauthorizedPage title={navigation.Unauthenticated.title}>
        <div>You are not authorized to this website.</div>
      </UnauthorizedPage>
    );
  }
  if (authStatus === AuthStatus.Authenticating) {
    return (
      <UnauthorizedPage title={title}>
        <div>Authenticating...</div>
      </UnauthorizedPage>
    );
  }
  return (
    <UserPage title={title}>
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
    </UserPage>
  );
};

export const OtherPage: React.FC<ReactChildren & IBaseLayout> = ({ title, children }) => {
  return (
    <OtherLayout>
      <CssBaseline />
      <MetaData title={title} />
      <PageLayoutHeader />
      <MainPageContent>{children}</MainPageContent>
      <PageLayoutFooter />
    </OtherLayout>
  );
};

export const UnauthorizedPage: React.FC<ReactChildren & IBaseLayout> = ({ title, children }) => {
  useUser();
  return <OtherPage title={title}>{children}</OtherPage>;
};

export const UserPage: React.FC<ReactChildren & IBaseLayout> = ({ title, children }) => {
  useUser();
  return (
    <MainPageLayout>
      <CssBaseline />
      <MetaData title={title} />
      <PageLayoutHeader />
      {children}
      <PageLayoutFooter />
    </MainPageLayout>
  );
};
