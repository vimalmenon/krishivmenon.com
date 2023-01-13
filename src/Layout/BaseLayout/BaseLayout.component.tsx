import { MetaData } from '@common';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@style';
import { ReactChildren } from '@types';

import { IBaseLayout } from './BaseLayout';
export { Container } from '@style';

export const BaseLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  return (
    <Container component="section" direction="column" sx={{ minHeight: '100vh' }}>
      <MetaData title={title} />
      <CssBaseline />
      {children}
    </Container>
  );
};
