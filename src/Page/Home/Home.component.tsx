import { MetaData } from '@common';
import { Container } from '@style';

export const Main: React.FC = () => {
  return (
    <Container component={'div'}>
      <MetaData title="Login Page" />
      <div>This is Home Page</div>
    </Container>
  );
};
