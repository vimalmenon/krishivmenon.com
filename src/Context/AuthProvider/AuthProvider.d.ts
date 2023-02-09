import { IGenericReturn } from '@types';

export interface IUser {
  profile: string;
  email: string;
  name: string;
}

export interface IAuthProvider {
  user: IUser | null;
  idToken: string | null;
  handleRefreshToken: IGenericReturn<Promise<unknown>>;
}

export interface IUseCommonAuthProvider {
  user: IUser | null;
  idToken: string | null;
}

export interface ISignInUrl {
  provider: string;
  state: string;
  redirectUrl: string;
}
