import { Icon } from '@common';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import NoteIcon from '@mui/icons-material/Note';

export const Home = {
  name: 'Home',
  url: '/',
  Icon: Icon.icons.Home,
  show: true,
  title: 'Krishiv Menon',
};

export const Gallery = {
  name: 'Gallery',
  url: '/gallery',
  Icon: InsertPhotoIcon,
  show: true,
  title: 'Gallery | Krishiv Menon',
};

export const Notes = {
  name: 'Notes',
  url: '/notes',
  Icon: NoteIcon,
  show: true,
  title: 'Notes | Krishiv Menon',
};

export const Admin = {
  name: 'Admin',
  url: '/admin',
  Icon: Icon.icons.Admin,
  show: false,
  title: 'Admin | Krishiv Menon',
};

export const NavigationList = [Home, Gallery, Notes, Admin];

export const navigation = {
  NavigationList,
  Home,
  Gallery,
  Notes,
  Admin,
};
