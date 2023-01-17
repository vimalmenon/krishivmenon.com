import { AppLayout } from '@layout';
import { useRouter } from 'next/router';
export default function Note() {
  const { query } = useRouter();
  return <AppLayout title="Note">{query.uid} is the uid</AppLayout>;
}
