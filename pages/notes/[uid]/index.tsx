import { AppLayout } from '@layout';
import { Note as Page } from '@page';
import { useRouter } from 'next/router';

export default function Note() {
  const { query } = useRouter();
  return (
    <AppLayout title="Note">
      <Page id={query.uid as string} />
    </AppLayout>
  );
}
