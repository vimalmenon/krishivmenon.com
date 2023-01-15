import React from 'react';

import jwtDecode from 'jwt-decode';

import { IAuthProvider } from './AuthProvider';

export const initialValue: IAuthProvider = {
  accessToken: null,
  idToken: null,
};
export const AuthProviderContext = React.createContext<IAuthProvider>(initialValue);
