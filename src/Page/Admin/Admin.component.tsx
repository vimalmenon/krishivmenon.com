import { MetaData } from '@common';
import { Container } from '@style';

export const Admin: React.FC = () => {
  return (
    <Container component={'div'}>
      <MetaData title="Login Page" />
      <div>This is Admin Page</div>
    </Container>
  );
};
