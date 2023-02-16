import { navigation } from '@data';
import { AppLayout } from '@layout';
import { NextPage } from 'next/types';

const PageNotFound: NextPage = () => {
  return <AppLayout title={navigation.PageNotFound.title}>Requested Page is not found</AppLayout>;
};

export default PageNotFound;
