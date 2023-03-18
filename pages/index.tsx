import { NextPage } from 'next/types';

import { navigation } from '@data';
import { AppLayout } from '@layout';
import { Main } from '@page';

const Home: NextPage = () => {
  return (
    <AppLayout title={navigation.Home.title}>
      <Main />
    </AppLayout>
  );
};

export default Home;
