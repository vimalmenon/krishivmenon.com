import React from 'react';

import { AuthStatus } from '@constant';
import { useCommon } from '@hook';
import { ReactChildren } from '@types';

import { AuthProviderContext, initialValue, useCommonAuthProvider } from './AuthProvider.service';

export const AuthProvider: React.FC<ReactChildren> = ({ children }) => {
  const [refreshToken, setRefreshToken] = React.useState<string | null>(null);
  const [idToken, setIdToken] = React.useState<string | null>(initialValue.idToken);
  const [authStatus, setAuthStatus] = React.useState<AuthStatus>(AuthStatus.NotAuthenticated);

  return (
    <AuthProviderContext.Provider
      value={{ refreshToken, setRefreshToken, idToken, setIdToken, authStatus, setAuthStatus }}
    >
      <AuthProviderInternal>{children}</AuthProviderInternal>
    </AuthProviderContext.Provider>
  );
};

const AuthProviderInternal: React.FC<ReactChildren> = ({ children }) => {
  const { getToken, handleRefreshToken, setIdToken, setRefreshToken, setAuthStatus, refreshToken } =
    useCommonAuthProvider();
  const { getStorage } = useCommon();

  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get('code');
    const state = query.get('state');
    if (code) {
      getToken(code, state || '');
    }
  }, []);
  React.useEffect(() => {
    if (getStorage<string>('idToken')) {
      setIdToken(getStorage<string>('idToken'));
    } else {
      setAuthStatus(AuthStatus.NotAuthenticated);
    }
  }, [getStorage<string>('idToken')]);
  React.useEffect(() => {
    if (getStorage<string>('refreshToken')) {
      setRefreshToken(getStorage<string>('refreshToken'));
    }
  }, [getStorage<string>('refreshToken')]);
  React.useEffect(() => {
    if (refreshToken) {
      handleRefreshToken();
    }
  }, [refreshToken]);
  return <>{children}</>;
};
