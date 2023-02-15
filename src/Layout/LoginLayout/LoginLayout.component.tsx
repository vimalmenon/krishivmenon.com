import { MetaData } from '@common';
import CssBaseline from '@mui/material/CssBaseline';
import { Login } from '@page';
import { IBaseLayout } from '@types';

import { LoginLayoutRoot } from './LoginLayout.style';
import { PageLayoutFooter, PageLayoutHeader } from '..';

export const LoginLayout: React.FC<IBaseLayout> = ({ title }) => {
  return (
    <LoginLayoutRoot>
      <CssBaseline />
      <MetaData title={title} />
      <PageLayoutHeader />
      <Login />
      <PageLayoutFooter />
    </LoginLayoutRoot>
  );
};
