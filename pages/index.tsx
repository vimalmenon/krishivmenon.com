import { AppLayout } from '@layout';
import { Main } from '@page';
import { NextPage } from 'next/types';

const Home: NextPage = () => {
  return (
    <AppLayout title="Home">
      <Main />
    </AppLayout>
  );
};

export default Home;
