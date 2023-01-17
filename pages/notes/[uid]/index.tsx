import { AppLayout } from '@layout';
import { Note as Page } from '@page';
import { useRouter } from 'next/router';

export default function Note() {
  const { query } = useRouter();
  const uid = parseInt(query.uid as string);
  return (
    <AppLayout title="Note">
      <Page id={uid} />
    </AppLayout>
  );
}
