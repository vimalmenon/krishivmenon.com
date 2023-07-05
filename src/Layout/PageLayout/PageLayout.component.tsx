import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import { MetaData, ErrorBoundary, Authenticating } from '@common';
import { AuthStatus } from '@constant';
import { useAuthHelper } from '@context';
import { navigation } from '@data';
import { useUser } from '@hook';
import { Login, Unauthorized } from '@page';
import { IBaseLayout, ReactChildren } from '@types';

import { MainLayout, MainPageContent, NoAsideLayout } from './PageLayout.style';
import {
  PageLayoutHeader,
  PageLayoutAside,
  PageLayoutFooter,
  PageLayoutAsideMobile,
  EnvCheck,
} from '../';

export const PageLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  const { authStatus } = useAuthHelper();
  if (authStatus === AuthStatus.NotAuthenticated) {
    return (
      <NotAuthenticatedPage title={navigation.Login.title}>
        <Login />
      </NotAuthenticatedPage>
    );
  }
  if (authStatus === AuthStatus.UnAuthorized) {
    return (
      <NotAuthenticatedPage title={title}>
        <ErrorBoundary>
          <Unauthorized />
        </ErrorBoundary>
      </NotAuthenticatedPage>
    );
  }
  if (authStatus === AuthStatus.Authenticating) {
    return (
      <NotAuthenticatedPage title={title}>
        <ErrorBoundary>
          <Authenticating />
        </ErrorBoundary>
      </NotAuthenticatedPage>
    );
  }
  if (authStatus === AuthStatus.Authorized) {
    return (
      <AuthorizedPage title={title}>
        <PageLayoutAside />
        <PageLayoutAsideMobile />
        <MainPageContent>
          <ErrorBoundary>{children}</ErrorBoundary>
        </MainPageContent>
      </AuthorizedPage>
    );
  }
  return null;
};

const NotAuthenticatedPage: React.FC<ReactChildren & IBaseLayout> = ({ title, children }) => {
  return (
    <NoAsideLayout>
      <CssBaseline />
      <MetaData title={title} />
      <PageLayoutHeader />
      <MainPageContent>{children}</MainPageContent>
      <PageLayoutFooter />
    </NoAsideLayout>
  );
};

const AuthorizedPage: React.FC<ReactChildren & IBaseLayout> = ({ title, children }) => {
  useUser();
  return (
    <MainLayout>
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
        <EnvCheck>{children}</EnvCheck>
      </ErrorBoundary>
      <PageLayoutFooter />
    </MainLayout>
  );
};
