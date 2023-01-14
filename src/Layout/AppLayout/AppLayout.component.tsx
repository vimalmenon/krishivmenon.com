import { context } from '@common';
import { ThemeProvider } from '@mui/material/styles';
import { ReactChildren, IBaseLayout } from '@types';

import { LoginLayout, AdminLayout } from '../';
import { getTheme } from '../../Config/styles';

export const AppLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  const { theme: themeValue, isAdmin } = context.useContext();
  const theme = getTheme(themeValue);

  return (
    <ThemeProvider theme={theme}>
      {isAdmin ? (
        <AdminLayout title={title}>{children}</AdminLayout>
      ) : (
        <LoginLayout title="Login Page">{children}</LoginLayout>
      )}
    </ThemeProvider>
  );
};
