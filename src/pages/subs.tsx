import type { NextPage } from 'next';
import { MainLayout } from '../layouts';
import { UserSubs } from '../pageComponents/SubsPage';

const Subs: NextPage = () => {
  return (
    <MainLayout>
      <UserSubs />
    </MainLayout>
  );
};

export default Subs;
