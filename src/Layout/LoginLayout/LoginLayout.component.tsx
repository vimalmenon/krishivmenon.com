import { Footer } from '@common';
import Box from '@mui/material/Box';
import { ReactChildren, IBaseLayout } from '@types';

import { BaseLayout } from '../';
import { Header } from './Header';

export const LoginLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  return (
    <BaseLayout title={title}>
      <Box component="div" sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
        <Header />
        <Box component={'main'} sx={{ display: 'flex', flex: '1 1 auto' }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </BaseLayout>
  );
};
