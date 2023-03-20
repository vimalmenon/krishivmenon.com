import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import NoteIcon from '@mui/icons-material/Note';

import { Icon } from '@common';

export const Home = {
  name: 'Home',
  url: '/',
  Icon: Icon.icons.Home,
  show: true,
  title: 'Krishiv Menon',
};

export const Gallery = {
  name: 'Gallery',
  url: '/gallery/',
  Icon: InsertPhotoIcon,
  show: true,
  title: 'Gallery | Krishiv Menon',
};

export const Notes = {
  name: 'Notes',
  url: '/notes/',
  Icon: NoteIcon,
  show: true,
  title: 'Notes | Krishiv Menon',
};

export const Unauthenticated = {
  name: 'Notes',
  url: '/notes/',
  Icon: NoteIcon,
  show: true,
  title: 'Unauthenticated | Krishiv Menon',
};

export const Admin = {
  name: 'Admin',
  url: '/admin/',
  Icon: Icon.icons.Admin,
  show: false,
  title: 'Admin | Krishiv Menon',
};
export const PageNotFound = {
  name: '',
  url: '',
  Icon: Icon.icons.Admin,
  show: false,
  title: 'Page Not Found | Krishiv Menon',
};

export const Login = {
  name: '',
  url: '',
  Icon: Icon.icons.Admin,
  show: false,
  title: 'Login | Krishiv Menon',
};

export const NavigationList = [Home, Gallery, Notes, Admin];

export const navigation = {
  Unauthenticated,
  PageNotFound,
  Gallery,
  Notes,
  Admin,
  Login,
  Home,
};
