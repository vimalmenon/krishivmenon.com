import { AppLayout } from '@layout';
import { Notes as Page } from '@page';
import { NextPage } from 'next/types';

const Notes: NextPage = () => {
  return (
    <AppLayout title="Notes">
      <Page />
    </AppLayout>
  );
};

export default Notes;
