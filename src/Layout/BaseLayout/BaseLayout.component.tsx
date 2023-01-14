import { MetaData } from '@common';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@style';
import { ReactChildren, IBaseLayout } from '@types';

export { Container } from '@style';

export const BaseLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  return (
    <Container component="section" sx={{ minHeight: '100vh' }}>
      <MetaData title={title} />
      <CssBaseline />
      {children}
    </Container>
  );
};
