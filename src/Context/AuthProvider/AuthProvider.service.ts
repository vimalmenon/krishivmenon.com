import React from 'react';

import { IGenericReturn } from '@types';

import { IAuthProvider, IUseCommonAuthProvider } from './AuthProvider';

export const initialValue: IAuthProvider = {
  accessToken: null,
  idToken: null,
  user: null,
};
export const AuthProviderContext = React.createContext<IAuthProvider>(initialValue);

export const useCommonAuthProvider: IGenericReturn<IUseCommonAuthProvider> = () => {
  const { user, accessToken } = React.useContext<IAuthProvider>(AuthProviderContext);

  return {
    user,
    accessToken,
  };
};
