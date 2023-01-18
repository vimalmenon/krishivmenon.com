import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GoogleIcon from '@mui/icons-material/Google';
import HomeIcon from '@mui/icons-material/Home';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import NoteIcon from '@mui/icons-material/Note';

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
  API_VERSION: process.env.NEXT_PUBLIC_VERSION || '',
};

export const StorageKey = 'KM';
