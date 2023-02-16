import { navigation } from '@data';
import { AppLayout } from '@layout';
import { Admin as AdminPage } from '@page';
import { NextPage } from 'next/types';

const Admin: NextPage = () => {
  return (
    <AppLayout title={navigation.Gallery.title}>
      <AdminPage />
    </AppLayout>
  );
};
export default Admin;
