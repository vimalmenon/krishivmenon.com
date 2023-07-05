import React from 'react';

import { AuthStatus } from '@constant';
import { IGenericMethod, IGenericReturn } from '@types';

export interface IAuthProviderContext {
  refreshToken: string | null;
  setRefreshToken: React.Dispatch<React.SetStateAction<string | null>>;
  idToken: string | null;
  setIdToken: React.Dispatch<React.SetStateAction<string | null>>;
  authStatus: AuthStatus;
  setAuthStatus: React.Dispatch<React.SetStateAction<AuthStatus>>;
}

export interface IUseCommonAuthProvider {
  idToken: string | null;
  signOut: IGenericMethod;
  refreshToken: string | null;
  handleRefreshToken: IGenericReturn<Promise<unknown>>;
  getToken: (code: string, state?: string) => Promise<void>;
  setIdToken: React.Dispatch<React.SetStateAction<string | null>>;
  setAuthStatus: React.Dispatch<React.SetStateAction<AuthStatus>>;
  setRefreshToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface ISignInUrl {
  provider: string;
  state: string;
  redirectUrl: string;
}
