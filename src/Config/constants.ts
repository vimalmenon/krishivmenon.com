import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
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

export const DrawerWidth = 240;
export const FooterHeight = 40;
