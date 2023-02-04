import GoogleIcon from '@mui/icons-material/Google';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import NoteIcon from '@mui/icons-material/Note';
import { StorageFileType } from '@types';

import { CommonIcons } from './icons';

export const Navigations = [
  {
    name: 'Home',
    url: '/',
    Icon: CommonIcons.Home,
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
    Icon: CommonIcons.Admin,
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
  AUTH_URL: process.env.NEXT_PUBLIC_AUTH_URL || '',
  API: process.env.NEXT_PUBLIC_API || '',
  API_VERSION: process.env.NEXT_PUBLIC_API_VERSION || '',
};

export const AcceptImages = {
  'image/*': ['.jpeg', '.png', '.heic'],
};
export const AcceptVideo = {
  'video/*': ['.mp4', '.mov'],
};
export const FileTypeExtensionMapping: Record<string, string> = {
  'image/jpeg': 'jpeg',
  'image/png': 'png',
  'image/heic': 'heic',
  'application/pdf': 'pdf',
  'application/zip': 'zip',
  'application/json': 'json',
  'video/quicktime': 'mov',
  'video/mp4': 'mp4',
  'audio/mpeg': 'mp3',
};

export const StorageFolderMapping: Record<StorageFileType, string> = {
  image: 'images',
  file: 'files',
  video: 'videos',
  audio: 'audios',
};
export const DriveFolderMapping: Record<string, string> = {
  'image/jpeg': StorageFolderMapping.image,
  'image/png': StorageFolderMapping.image,
  'image/heic': StorageFolderMapping.image,
  'application/pdf': StorageFolderMapping.file,
  'application/zip': StorageFolderMapping.file,
  'application/json': StorageFolderMapping.file,
  'video/quicktime': StorageFolderMapping.video,
  'video/mp4': StorageFolderMapping.video,
  'audio/mpeg': StorageFolderMapping.audio,
};

export const StorageKey = 'KM';

export const FolderDepth = 4;

export { CommonIcons } from './icons';
