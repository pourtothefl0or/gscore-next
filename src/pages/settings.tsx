import type { NextPage } from 'next';
import { MainLayout } from '../layouts';
import { ProfileEdit } from '../pageComponents/SettingsPage';

const Settings: NextPage = () => {
  return (
    <MainLayout>
      <ProfileEdit />
    </MainLayout>
  );
};

export default Settings;
