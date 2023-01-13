import Box from '@mui/material/Box';
import { ReactChildren } from '@types';

import { BaseLayout } from '../';
import { Footer } from './Footer';

export const AppLayout: React.FC<ReactChildren> = ({ children }) => {
  return (
    <BaseLayout title="Home Page">
      <Box component={'main'} sx={{ display: 'flex', flex: '1 1 auto' }}>
        {children}
      </Box>
      <Footer />
    </BaseLayout>
  );
};
