import type { NextPage } from 'next';
import { MainLayout } from '../layouts';
import { Offers } from '../pageComponents/IndexPage';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Offers />
    </MainLayout>
  );
};

export default Home;
