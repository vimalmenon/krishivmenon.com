import { MetaData } from '@common';
import { context } from '@common';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@style';
import { ReactChildren } from '@types';

import { getTheme } from '../../Config/styles';
import { IBaseLayout } from './BaseLayout';
export { Container } from '@style';

export const BaseLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  const { theme: themeValue } = context.useContext();
  const theme = getTheme(themeValue);
  return (
    <ThemeProvider theme={theme}>
      <Container component="section" direction="column" sx={{ minHeight: '100vh' }}>
        <MetaData title={title} />
        <CssBaseline />
        {children}
      </Container>
    </ThemeProvider>
  );
};
