import React from 'react';

import { IAuthProvider } from './AuthProvider';

export const initialValue: IAuthProvider = {
  accessToken: null,
  idToken: null,
  user: null,
};
export const AuthProviderContext = React.createContext<IAuthProvider>(initialValue);

export const useCommonAuthProvider = () => {
  const { user, accessToken } = React.useContext<IAuthProvider>(AuthProviderContext);

  return {
    user,
    accessToken,
  };
};
