import type { NextPage } from 'next';
import { MainLayout } from '../layouts';
import { Auth } from '../pageComponents/LoginPage';

const Login: NextPage = () => {
  return (
    <MainLayout>
      <Auth />
    </MainLayout>
  );
};

export default Login;
