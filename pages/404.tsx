import { NextPage } from 'next/types';

import { navigation } from '@data';
import { AppLayout } from '@layout';

const PageNotFound: NextPage = () => {
  return <AppLayout title={navigation.PageNotFound.title}>Requested page is not found</AppLayout>;
};

export default PageNotFound;
