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
  AUTH_LOGOUT_URL: '',
  API: process.env.NEXT_PUBLIC_API || '',
  API_VERSION: process.env.NEXT_PUBLIC_API_VERSION || '',
  AUTHORIZATION: process.env.NEXT_PUBLIC_AUTHORIZATION || '',
};

export const AcceptImages = {
  'image/*': ['.jpeg', '.png', '.heic'],
};
export const AcceptVideo = {
  'video/*': ['.mp4', '.mov'],
};

export const StorageKey = 'KM';

export const FolderDepth = 4;

export const AuthRefreshTime = 6300000;
