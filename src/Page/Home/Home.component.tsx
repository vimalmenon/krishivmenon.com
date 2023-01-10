import { MetaData } from '@common';
import { Container } from '@style';

export const Main: React.FC = () => {
  return (
    <Container component={'div'}>
      <MetaData />
      <div>This is Home Page</div>
    </Container>
  );
};
