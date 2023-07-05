import React from 'react';

import { useRouter } from 'next/router';

import { AuthStatus, ENV } from '@constant';
import { useCommon } from '@hook';
import { IGeneric, IGenericMethod, IGenericReturn } from '@types';
import { NotImplemented, convertMinutesToMilliseconds } from '@utility';

import { IUseCommonAuthProvider, ISignInUrl, IAuthProviderContext } from './AuthProvider';
import { useCommonContext } from '../AppProvider';

export const initialValue: IAuthProviderContext = {
  refreshToken: null,
  setRefreshToken: NotImplemented,
  idToken: null,
  setIdToken: NotImplemented,
  authStatus: AuthStatus.NotAuthenticated,
  setAuthStatus: NotImplemented,
};
export const AuthProviderContext = React.createContext<IAuthProviderContext>(initialValue);

export const useCommonAuthProvider: IGenericReturn<IUseCommonAuthProvider> = () => {
  const { idToken, setAuthStatus, setIdToken, refreshToken, setRefreshToken } =
    React.useContext<IAuthProviderContext>(AuthProviderContext);
  const { removeStorage, saveStorage } = useCommon();
  const { setProfile } = useCommonContext();
  const router = useRouter();
  const signOut: IGenericMethod = () => {
    removeStorage('refreshToken');
    removeStorage('idToken');
    setProfile(null);
  };
  const handleRefreshToken: IGenericReturn<Promise<unknown>> = async () => {
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
    setAuthStatus(AuthStatus.Authorized);
    setTimeout(handleRefreshToken, convertMinutesToMilliseconds(45));
  };
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
        if (state) {
          router.replace(state);
        }
      }
    } catch (error) {
      return;
    }
  };
  return {
    idToken,
    signOut,
    getToken,
    setIdToken,
    refreshToken,
    setAuthStatus,
    setRefreshToken,
    handleRefreshToken,
  };
};

export const signInUrl: IGeneric<ISignInUrl, string> = ({ provider, state, redirectUrl }) => {
  return `${ENV.AUTH_URL}?identity_provider=${provider}&client_id=${ENV.AUTH_CLIENT_ID}&state=${state}&response_type=code&redirect_uri=${redirectUrl}`;
};

export const createBody: IGeneric<Record<string, string>, string> = (body) => {
  return Object.keys(body)
    .map((value) => {
      return `${value}=${body[value]}`;
    })
    .join('&');
};

export const useAuthHelper = () => {
  const { authStatus } = React.useContext<IAuthProviderContext>(AuthProviderContext);
  return {
    authStatus,
  };
};
