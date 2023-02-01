import { AppLayout } from '@layout';
import { Admin as AdminPage } from '@page';
import { NextPage } from 'next/types';

const Admin: NextPage = () => {
  return (
    <AppLayout title="Admin ">
      <AdminPage />
    </AppLayout>
  );
};
export default Admin;
