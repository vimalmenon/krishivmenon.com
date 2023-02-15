import { Icon } from '@common';
import GoogleIcon from '@mui/icons-material/Google';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import NoteIcon from '@mui/icons-material/Note';

export const Navigations = [
  {
    name: 'Home',
    url: '/',
    Icon: Icon.icons.Home,
    show: true,
  },
  {
    name: 'Gallery',
    url: '/gallery',
    Icon: InsertPhotoIcon,
    show: true,
  },
  {
    name: 'Notes',
    url: '/notes',
    Icon: NoteIcon,
    show: true,
  },
  {
    name: 'Admin',
    url: '/admin',
    Icon: Icon.icons.Admin,
    show: false,
  },
];

export const Providers = [
  {
    name: 'Google',
    provider: 'Google',
    Icon: GoogleIcon,
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
