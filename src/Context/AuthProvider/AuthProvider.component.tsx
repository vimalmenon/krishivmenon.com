import React from 'react';

import { ENV } from '@constant';
import { useCommonLocalStorage } from '@context';
import { ReactChildren, IGenericReturn, IAuthResponse } from '@types';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';

import { IUser } from './AuthProvider';
import { AuthProviderContext, initialValue, createBody } from './AuthProvider.service';
import { useCommonContext } from '../AppProvider/AppProvider.service';

export const AuthProvider: React.FC<ReactChildren> = ({ children }) => {
  const [refreshToken, setRefreshToken] = React.useState<string | null>(null);
  const [idToken, setIdToken] = React.useState<string | null>(initialValue.idToken);
  const [user, setUser] = React.useState<IUser | null>(initialValue.user);
  const [tokenExpiry, setTokenExpiry] = React.useState<number>(0);
  const { saveStorage, getStorage } = useCommonLocalStorage();
  const { setAuthorized } = useCommonContext();
  const router = useRouter();
  const getToken = async (code: string, state?: string): Promise<void> => {
    try {
      const result = await fetch(ENV.AUTH_TOKEN_URL, {
        method: 'Post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${ENV.AUTHORIZATION}`,
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
        saveStorage('userProfile', value.picture);
        saveStorage('userEmail', value.email);
        saveStorage('userEmail', value.given_name);
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
    setAuthorized(false);
    const result = await fetch(ENV.AUTH_TOKEN_URL, {
      method: 'Post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${ENV.AUTHORIZATION}`,
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
    setAuthorized(true);
  };
  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get('code');
    const state = query.get('state');
    if (code) {
      getToken(code || '', state || '');
    }
  }, []);
  React.useEffect(() => {
    if (getStorage<string>('idToken')) {
      setIdToken(getStorage<string>('idToken'));
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  }, [getStorage<string>('idToken')]);
  React.useEffect(() => {
    if (getStorage<string>('refreshToken')) {
      setRefreshToken(getStorage<string>('refreshToken'));
      setTokenExpiry(parseInt(getStorage<string>('tokenExpiry')));
      setUser({
        profile: getStorage<string>('userProfile'),
        email: getStorage<string>('userEmail'),
        name: getStorage<string>('userName'),
      });
    }
  }, [getStorage<string>('refreshToken')]);
  React.useEffect(() => {
    if (tokenExpiry) {
      if (tokenExpiry < new Date().getTime()) {
        handleRefreshToken();
      }
    }
  }, [tokenExpiry]);
  return (
    <AuthProviderContext.Provider value={{ idToken, user, handleRefreshToken }}>
      {children}
    </AuthProviderContext.Provider>
  );
};
