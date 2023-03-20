import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import { MetaData, ErrorBoundary } from '@common';
import { AuthStatus } from '@constant';
import { useCommonContext } from '@context';
import { navigation } from '@data';
import { useUser } from '@hook';
import { Login, Unauthorized } from '@page';
import { IBaseLayout, ReactChildren } from '@types';

import { MainLayout, MainPageContent, OtherLayout } from './PageLayout.style';
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
      <NotAuthenticatedPage title={navigation.Login.title}>
        <Login />
      </NotAuthenticatedPage>
    );
  }
  if (authStatus === AuthStatus.UnAuthorized) {
    return (
      <AuthorizedPage title={title}>
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
              <ErrorBoundary>
                <Unauthorized />
              </ErrorBoundary>
            </MainPageContent>
          </EnvCheck>
        </ErrorBoundary>
      </AuthorizedPage>
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
    <AuthorizedPage title={title}>
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
    </AuthorizedPage>
  );
};

export const NotAuthenticatedPage: React.FC<ReactChildren & IBaseLayout> = ({
  title,
  children,
}) => {
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
  return <NotAuthenticatedPage title={title}>{children}</NotAuthenticatedPage>;
};

export const AuthorizedPage: React.FC<ReactChildren & IBaseLayout> = ({ title, children }) => {
  useUser();
  return (
    <MainLayout>
      <CssBaseline />
      <MetaData title={title} />
      <PageLayoutHeader />
      {children}
      <PageLayoutFooter />
    </MainLayout>
  );
};
