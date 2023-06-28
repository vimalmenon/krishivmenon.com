import { Icon } from '@common';

export const Providers = [
  {
    name: 'Google',
    provider: 'Google',
    Icon: Icon.icons.Google,
  },
];

export const ENV = {
  AUTH_CLIENT_ID: process.env.NEXT_PUBLIC_AUTH_CLIENT_ID || '',
  AUTH_URL: `${process.env.NEXT_PUBLIC_AUTH_URL}/oauth2/authorize`,
  AUTH_TOKEN_URL: `${process.env.NEXT_PUBLIC_AUTH_URL}/oauth2/token`,
  AUTH_LOGOUT_URL: process.env.NEXT_PUBLIC_AUTH_URL,
  API_URL: process.env.NEXT_PUBLIC_API_URL || '',
  API_VERSION: process.env.NEXT_PUBLIC_API_VERSION || '',
  AUTH_AUTHORIZATION: process.env.NEXT_PUBLIC_AUTH_AUTHORIZATION || '',
  ASSET_S3_BUCKET: process.env.NEXT_PUBLIC_ASSET_S3_BUCKET || '',
  FILE_UPLOAD_API: process.env.NEXT_PUBLIC_FILE_UPLOAD_API || '',
};

export const AcceptImages = {
  'image/*': ['.jpeg', '.png', '.heic'],
};
export const AcceptVideo = {
  'video/*': ['.mp4', '.mov'],
};

export const StorageKey = 'KM';

export const AuthRefreshTime = 6300000;

export enum AuthStatus {
  NotAuthenticated,
  Authenticating,
  UnAuthorized,
  Authorized,
}

export const MaxFolderUploadDepth = 4;
