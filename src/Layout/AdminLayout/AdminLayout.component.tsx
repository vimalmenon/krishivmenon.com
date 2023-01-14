import { Footer } from '@common';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ReactChildren, IBaseLayout } from '@types';

import { BaseLayout } from '../';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const AdminLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  return (
    <BaseLayout title={title}>
      <Header />
      <Sidebar />
      <Box component={'main'} sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column' }}>
        <Toolbar />
        <Box component="section" sx={{ flex: '1 1 auto' }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </BaseLayout>
  );
};
