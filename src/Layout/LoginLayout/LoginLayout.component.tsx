import Box from '@mui/material/Box';
import { ReactChildren } from '@types';

import { BaseLayout } from '../';
import { Header } from './Header';

export const LoginLayout: React.FC<ReactChildren> = ({ children }) => {
  return (
    <BaseLayout title="Home Page">
      <Header />
      <Box component={'main'} sx={{ display: 'flex', flex: '1 1 auto' }}>
        {children}
      </Box>
    </BaseLayout>
  );
};
