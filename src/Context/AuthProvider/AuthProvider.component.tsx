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
  const { storage, saveStorage } = useCommonLocalStorage();
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
        if (state) {
          router.replace(state);
        }
      }
    } catch (error) {
      return;
    }
  };
  const handleRefreshToken: IGenericReturn<Promise<unknown>> = async () => {
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
    if (storage && storage['idToken']) {
      setIdToken(storage['idToken']);
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  }, [storage]);
  React.useEffect(() => {
    if (storage && storage['refreshToken']) {
      setRefreshToken(storage['refreshToken']);
    }
  }, [storage]);
  React.useEffect(() => {
    if (idToken) {
      const value = jwtDecode<IAuthResponse>(idToken);
      if (value.exp * 1000 < new Date().getTime()) {
        handleRefreshToken();
      } else {
        setUser({
          profile: value.picture,
          email: value.email,
          name: value.given_name,
        });
      }
    }
  }, [idToken]);
  return (
    <AuthProviderContext.Provider value={{ idToken, user, handleRefreshToken }}>
      {children}
    </AuthProviderContext.Provider>
  );
};
