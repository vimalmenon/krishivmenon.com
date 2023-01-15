import { Footer } from '@common';
import Box from '@mui/material/Box';
import { Login } from '@page';
import { IBaseLayout } from '@types';

import { Header } from './Header';
import { BaseLayout } from '../';

export const LoginLayout: React.FC<IBaseLayout> = ({ title }) => {
  return (
    <BaseLayout title={title}>
      <Box component="div" sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
        <Header />
        <Box component={'main'} sx={{ display: 'flex', flex: '1 1 auto' }}>
          <Login />
        </Box>
        <Footer />
      </Box>
    </BaseLayout>
  );
};
