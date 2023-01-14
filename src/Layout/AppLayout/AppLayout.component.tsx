import { context } from '@common';
import { ThemeProvider } from '@mui/material/styles';
import { ReactChildren } from '@types';

import { LoginLayout, AdminLayout } from '../';
import { getTheme } from '../../Config/styles';

export const AppLayout: React.FC<ReactChildren> = ({ children }) => {
  const { theme: themeValue, isAdmin } = context.useContext();
  const theme = getTheme(themeValue);

  return (
    <ThemeProvider theme={theme}>
      {!isAdmin ? <AdminLayout>{children}</AdminLayout> : <LoginLayout>{children}</LoginLayout>}
    </ThemeProvider>
  );
};
