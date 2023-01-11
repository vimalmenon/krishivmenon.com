import Box from '@mui/material/Box';
import { ReactChildren } from '@types';

import { BaseLayout } from '../';
import { Footer } from './Footer';
import { Header } from './Header';
export const AppLayout: React.FC<ReactChildren> = ({ children }) => {
  return (
    <BaseLayout title="Home Page">
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <Header />
        <Box component={'main'} sx={{ display: 'flex', flex: '1 1 auto' }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </BaseLayout>
  );
};
