import React from 'react';

import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';

import { AuthStatus, ENV } from '@constant';
import { useCommonContext } from '@context';
import { useCommon } from '@hook';
import { ReactChildren, IGenericReturn, IAuthResponse, IGenericMethod } from '@types';

import { AuthProviderContext, initialValue, createBody } from './AuthProvider.service';

export const AuthProvider: React.FC<ReactChildren> = ({ children }) => {
  const [refreshToken, setRefreshToken] = React.useState<string | null>(null);
  const [idToken, setIdToken] = React.useState<string | null>(initialValue.idToken);
  const [tokenExpiry, setTokenExpiry] = React.useState<number>(0);
  const { saveStorage, getStorage, removeStorage } = useCommon();
  const { setAuthStatus, setProfile } = useCommonContext();
  const router = useRouter();
  const getToken = async (code: string, state?: string): Promise<void> => {
    try {
      const result = await fetch(ENV.AUTH_TOKEN_URL, {
        method: 'Post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${ENV.AUTH_AUTHORIZATION}`,
        },
        body: createBody({
          grant_type: 'authorization_code',
          client_id: ENV.AUTH_CLIENT_ID,
          code: code,
          redirect_uri: `${location.origin}/`,
        }),
      });
      if (result.ok) {
        const data = await result.json();
        saveStorage('refreshToken', data.refresh_token);
        saveStorage('idToken', data.id_token);
        const value = jwtDecode<IAuthResponse>(data.id_token);
        saveStorage('tokenExpiry', String(value.exp * 1000));
        if (state) {
          router.replace(state);
        }
      }
    } catch (error) {
      return;
    }
  };
  const handleRefreshToken: IGenericReturn<Promise<unknown>> = async () => {
    if (tokenExpiry) {
      if (tokenExpiry < new Date().getTime()) {
        setAuthStatus(AuthStatus.Authenticating);
        const result = await fetch(ENV.AUTH_TOKEN_URL, {
          method: 'Post',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${ENV.AUTH_AUTHORIZATION}`,
          },
          body: createBody({
            grant_type: 'refresh_token',
            client_id: ENV.AUTH_CLIENT_ID,
            refresh_token: refreshToken || '',
          }),
        });
        const data = await result.json();
        saveStorage('idToken', data.id_token);
        setIdToken(data.id_token);
        saveStorage('tokenExpiry', String(new Date().getTime() + 3000000));
        setAuthStatus(AuthStatus.Authorized);
      }
    }
  };
  const signOut: IGenericMethod = () => {
    removeStorage('refreshToken');
    removeStorage('idToken');
    removeStorage('tokenExpiry');
    setProfile(null);
  };
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
      setAuthStatus(AuthStatus.Authenticating);
    } else {
      setAuthStatus(AuthStatus.NotAuthenticated);
    }
  }, [getStorage<string>('idToken')]);
  React.useEffect(() => {
    if (getStorage<string>('refreshToken')) {
      setRefreshToken(getStorage<string>('refreshToken'));
      setTokenExpiry(parseInt(getStorage<string>('tokenExpiry')));
    }
  }, [getStorage<string>('refreshToken')]);
  React.useEffect(() => {
    handleRefreshToken();
  }, [tokenExpiry]);
  return (
    <AuthProviderContext.Provider value={{ idToken, handleRefreshToken, signOut }}>
      {children}
    </AuthProviderContext.Provider>
  );
};
