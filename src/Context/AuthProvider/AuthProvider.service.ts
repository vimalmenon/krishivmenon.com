import React from 'react';

import { ENV } from '@constant';
import { IGeneric, IGenericReturn } from '@types';
import { NotImplemented } from '@utility';

import { IAuthProvider, IUseCommonAuthProvider, ISignInUrl } from './AuthProvider';

export const initialValue: IAuthProvider = {
  handleRefreshToken: NotImplemented,
  idToken: null,
  user: null,
};
export const AuthProviderContext = React.createContext<IAuthProvider>(initialValue);

export const useCommonAuthProvider: IGenericReturn<IUseCommonAuthProvider> = () => {
  const { user, idToken, handleRefreshToken } =
    React.useContext<IAuthProvider>(AuthProviderContext);

  return {
    user,
    idToken,
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
