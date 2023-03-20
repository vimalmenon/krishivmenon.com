import { NextPage } from 'next/types';

import { navigation } from '@data';
import { AppLayout } from '@layout';
import { Notes as Page } from '@page';

const Notes: NextPage = () => {
  return (
    <AppLayout title={navigation.Notes.title}>
      <Page />
    </AppLayout>
  );
};

export default Notes;
