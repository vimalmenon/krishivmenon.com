import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GoogleIcon from '@mui/icons-material/Google';
import HomeIcon from '@mui/icons-material/Home';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import NoteIcon from '@mui/icons-material/Note';
import { StorageFileType } from '@types';

export { CommonIcons } from './icons';

export const Navigations = [
  {
    name: 'Home',
    url: '/',
    Icon: HomeIcon,
  },
  {
    name: 'Photos',
    url: '/photos',
    Icon: InsertPhotoIcon,
  },
  {
    name: 'Notes',
    url: '/notes',
    Icon: NoteIcon,
  },
  {
    name: 'Admin',
    url: '/admin',
    Icon: AdminPanelSettingsIcon,
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
  AUTH_URL: process.env.NEXT_PUBLIC_AUTH_URL || '',
  API: process.env.NEXT_PUBLIC_API || '',
  API_VERSION: process.env.NEXT_PUBLIC_API_VERSION || '',
};

export const FileTypeMapping: Record<string, string> = {
  'image/jpeg': 'jpeg',
  'image/png': 'png',
  'image/heic': 'heic',
  'application/pdf': 'pdf',
  'application/zip': 'zip',
  'application/json': 'json',
};

export const StorageFolderMapping: Record<StorageFileType, string> = {
  image: 'images',
  file: 'files',
  video: 'videos',
};

export const StorageKey = 'KM';
