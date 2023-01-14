import Box from '@mui/material/Box';
import { ReactChildren } from '@types';

import { BaseLayout } from '../';
export const AdminLayout: React.FC<ReactChildren> = () => {
  return (
    <BaseLayout title="Admin Page">
      <Box component={'main'} sx={{ display: 'flex', flex: '1 1 auto' }}></Box>
    </BaseLayout>
  );
};
