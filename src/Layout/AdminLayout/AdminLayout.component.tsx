import { Footer } from '@common';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ReactChildren, IBaseLayout } from '@types';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { BaseLayout } from '../';

export const AdminLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  return (
    <BaseLayout title={title}>
      <Header />
      <Sidebar />
      <Box component={'main'} sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column' }}>
        <Toolbar />
        <Box component="section" sx={{ display: 'flex', flex: '1 1 100%', p: 2 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </BaseLayout>
  );
};
