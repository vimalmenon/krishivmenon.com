import { IGenericMethod, IGenericReturn } from '@types';

export interface IAuthProvider {
  idToken: string | null;
  signOut: IGenericMethod;
  handleRefreshToken: IGenericReturn<Promise<unknown>>;
}

export interface IUseCommonAuthProvider {
  idToken: string | null;
  signOut: IGenericMethod;
}

export interface ISignInUrl {
  provider: string;
  state: string;
  redirectUrl: string;
}
