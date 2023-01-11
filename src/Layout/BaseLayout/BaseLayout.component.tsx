import { MetaData } from '@common';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ReactChildren } from '@types';

import { getTheme } from '../../Config/styles';
import { IBaseLayout } from './BaseLayout';

export const BaseLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  const theme = getTheme('dark');
  return (
    <ThemeProvider theme={theme}>
      <MetaData title={title} />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
