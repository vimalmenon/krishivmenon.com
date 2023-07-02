import { useRouter } from 'next/router';
import { NextPage } from 'next/types';

import { navigation } from '@data';
import { AppLayout } from '@layout';
import { Gallery as Page } from '@page';

const Gallery: NextPage = () => {
  const router = useRouter();
  return (
    <AppLayout title={navigation.Gallery.title}>
      <Page folder={router.query.id as string} />
    </AppLayout>
  );
};

export default Gallery;
