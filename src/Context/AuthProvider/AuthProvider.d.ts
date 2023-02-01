export interface IUser {
  profile: string;
  email: string;
  name: string;
}

export interface IAuthProvider {
  accessToken: string | null;
  idToken: string | null;
  user: IUser | null;
}

export interface IUseCommonAuthProvider {
  user: IUser | null;
  accessToken: string | null;
}
