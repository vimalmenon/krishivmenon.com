import Box from '@mui/material/Box';
import { ReactChildren } from '@types';

import { BaseLayout } from '../';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const AdminLayout: React.FC<ReactChildren> = ({ children }) => {
  return (
    <BaseLayout title="Admin Page">
      <Header />
      <Sidebar />
      <Box component={'main'} sx={{ display: 'flex' }}>
        {children}
      </Box>
    </BaseLayout>
  );
};
