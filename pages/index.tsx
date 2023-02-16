import { navigation } from '@data';
import { AppLayout } from '@layout';
import { Main } from '@page';
import { NextPage } from 'next/types';

const Home: NextPage = () => {
  return (
    <AppLayout title={navigation.Home.title}>
      <Main />
    </AppLayout>
  );
};

export default Home;
