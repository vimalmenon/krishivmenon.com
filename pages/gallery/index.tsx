import { AppLayout } from '@layout';
import { Gallery as Page } from '@page';
import { NextPage } from 'next/types';

const Gallery: NextPage = () => {
  return (
    <AppLayout title="Gallery">
      <Page />
    </AppLayout>
  );
};

export default Gallery;
