import Link from 'next/link';
import { FC, useState } from 'react';
import styled from 'styled-components';
import { ChevronDown } from '../../../../ui/iconComponents';
import { BREAKPOINTS, COLORS, TYPOGRAPHY, VARS } from '../../../../constants';
import { Popup } from '../../../../ui/components';

interface INavButton {
  $isOpen: boolean;
};

const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Root>
      <Item>
        <Link href="/subs">
          <NavLink>My subscriptions</NavLink>
        </Link>
      </Item>
      <Item>
        <NavButton
          $isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          Alex <ChevronDown/>
        </NavButton>
        {isOpen && <NavPopup />}
      </Item>
    </Root>
  );
};

export default Nav;

const Root = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px 32px;

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    flex-direction: column;
    align-items: baseline;
    row-gap: 0;
  }
`;

const Item = styled.li`
  position: relative;

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    width: 100%;
    border-bottom: 1px solid ${COLORS.neutral[600]};
  }
`;

const NavLink = styled.a`
  display: block;
  margin: 0;
  ${TYPOGRAPHY.textSingle[300].regular}
  color: ${COLORS.neutral[100]};
  transition: color ${VARS.animation};

  &:focus {
    color: ${COLORS.accent.primary[1]};
  }

  &:hover {
    color: ${COLORS.system.red[400]};
  }

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    padding: 20px 0;
  }
`;

const NavButton = styled.button<INavButton>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7px;
  margin: 0;
  width: 100%;
  ${TYPOGRAPHY.textSingle[300].regular}
  transition: color ${VARS.animation};
  color: ${COLORS.neutral[100]};

  svg {
    transition: transform ${VARS.animation};
  }

  ${({ $isOpen }) => $isOpen && `
    svg {
      transform: rotate(180deg);
    }
  `}

  &:focus {
    color: ${COLORS.accent.primary[1]};
  }

  &:hover {
    color: ${COLORS.system.red[400]};
  }

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    padding: 20px 0;
  }
`;

const NavPopup = styled(Popup)`
  @media (min-width: ${BREAKPOINTS.tablet.min}) {
    position: absolute;
    top: calc(100% + 29px);
    right: 0;
  }
`;
