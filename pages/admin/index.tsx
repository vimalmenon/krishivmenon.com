import { AppLayout } from '@layout';
import { Admin as AdminPage } from '@page';

export default function Admin() {
  return (
    <AppLayout title="Admin Page">
      <AdminPage />
    </AppLayout>
  );
}
