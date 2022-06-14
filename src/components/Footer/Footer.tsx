import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../';
import { Nav, Social } from './components';
import { Logo } from '../../ui/iconComponents';
import { BREAKPOINTS, COLORS, TYPOGRAPHY } from '../../constants';

const Footer: FC = () => {
  return (
    <Root>
      <Container>
        <FooterTop>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <Description>
            Ut enim ad minim veniam quis nostrud exercitation  ea commodo
          </Description>
        </FooterTop>
        <FooterBottom>
          <Nav />
          <Social />
        </FooterBottom>
      </Container>
    </Root>
  );
};

export default Footer;

const Root = styled.footer`
  border-top: 1px solid ${COLORS.neutral[600]};
  background-color: ${COLORS.neutral[800]};
`;

const FooterTop = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

const Description = styled.p`
  margin: 24px 0 0;
  max-width: 323px;
  ${TYPOGRAPHY.paragraph.default};
  color: ${COLORS.neutral[400]};
`;

const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${COLORS.neutral[600]};
  padding-top: 44px;
  padding-bottom: 42px;

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    flex-direction: column;
    gap: 24px;
    padding-top: 32px;
    padding-bottom: 24px;
  }
`;
