import { ErrorBoundary, MetaData } from '@common';
import CssBaseline from '@mui/material/CssBaseline';
import { Login } from '@page';
import { IBaseLayout } from '@types';

import { LoginLayoutRoot, LoginLayoutContent } from './LoginLayout.style';
import { EnvCheck, PageLayoutFooter, PageLayoutHeader } from '..';

export const LoginLayout: React.FC<IBaseLayout> = ({ title }) => {
  return (
    <LoginLayoutRoot>
      <CssBaseline />
      <MetaData title={title} />
      <PageLayoutHeader />
      <ErrorBoundary
        sx={{
          gridArea: 'content',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <EnvCheck>
          <LoginLayoutContent>
            <Login />
          </LoginLayoutContent>
        </EnvCheck>
      </ErrorBoundary>
      <PageLayoutFooter />
    </LoginLayoutRoot>
  );
};
