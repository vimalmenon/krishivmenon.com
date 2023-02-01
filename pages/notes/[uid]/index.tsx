import { AppLayout } from '@layout';
import { Note as Page } from '@page';
import { useRouter } from 'next/router';
import { NextPage } from 'next/types';

const Note: NextPage = () => {
  const { query } = useRouter();
  return (
    <AppLayout title="Note">
      <Page id={query.uid as string} />
    </AppLayout>
  );
};

export default Note;
