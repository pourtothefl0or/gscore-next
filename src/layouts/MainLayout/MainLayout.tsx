import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Header, Footer } from '../../components';

interface MainLayoutProps {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
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
