import type { NextPage } from 'next';
import { MainLayout } from '../layouts';
import { Offers } from '../pageComponents';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Offers />
    </MainLayout>
  );
};

export default Home;
