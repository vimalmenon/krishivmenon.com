import Box from '@mui/material/Box';
import { ReactChildren } from '@types';

import { BaseLayout } from '../';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const AdminLayout: React.FC<ReactChildren> = () => {
  return (
    <BaseLayout title="Admin Page">
      <Box component={'main'} sx={{ display: 'flex', backgroundColor: 'red' }}>
        <Header />
        <Sidebar />
      </Box>
    </BaseLayout>
  );
};
