import Link from 'next/link';
import { FC, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../';
import { Nav } from './components'
import { Burger, Close, Logo } from '../../ui/iconComponents';
import { BREAKPOINTS, COLORS } from '../../constants';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <Root>
      <HeaderContainer>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <BurgerButton onClick={toggleIsOpen}>
          <Burger />
        </BurgerButton>
        <Menu className={isOpen ? 'is-open' : ''}>
          <MenuTop>
            <Button onClick={toggleIsOpen}>
              <Close />
            </Button>
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </MenuTop>
          <Nav />
        </Menu>
      </HeaderContainer>
    </Root>
  );
};

export default Header;

const Root = styled.header`
  background-color: ${COLORS.neutral[800]};
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const Menu = styled.div`
  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
    padding: 28px 24px;
    min-width: 260px;
    background-color: ${COLORS.neutral[700]};
    opacity: 0;
    visibility: hidden;
    transform: translateX(100%);

    &.is-open {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }
  }
`;

const MenuTop = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 24px;

  @media (min-width: ${BREAKPOINTS.tablet.min}) {
    display: none;
  }
`;

const Button = styled.button`
  font-size: 0;
  color: ${COLORS.neutral[100]};
`;

const BurgerButton = styled(Button)`
  @media (min-width: ${BREAKPOINTS.tablet.min}) {
    display: none;
  }
`;
