import type { NextPage } from 'next';
import { MainLayout } from '../layouts';
import { MySubs } from '../pageComponents';

const Subs: NextPage = () => {
  return (
    <MainLayout>
      <MySubs />
    </MainLayout>
  );
};

export default Subs;
