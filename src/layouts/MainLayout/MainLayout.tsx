import { FC, ReactNode } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Header, Footer } from '../../components';

interface Props {
  children: ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>GScore</title>
      </Head>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  min-height: 950px;
`;
