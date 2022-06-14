import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronDown } from '../../../../assets/icons';
import { BREAKPOINTS, COLORS, TYPOGRAPHY } from '../../../../constants';
import { Popup } from '../../../../ui';

export const Nav: React.FC = () => {
  const [isActive, setIsOpen] = useState(false);

  return (
    <StyledNav>
      <Item>
        <Link href="/subs">
          <NavLink>My subscriptions</NavLink>
        </Link>
      </Item>
      <Item>
        <NavButton className={isActive ? 'is-active' : ''} onClick={() => setIsOpen(!isActive)}>
          Alex <ChevronDown />
        </NavButton>
        <NavPopup className={isActive ? 'is-open' : ''} />
      </Item>
    </StyledNav>
  );
};

const StyledNav = styled.ul`
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

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    padding: 20px 0;
  }
`;

const NavButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7px;
  margin: 0;
  width: 100%;
  ${TYPOGRAPHY.textSingle[300].regular}
  color: ${COLORS.neutral[100]};

  &.is-active {
    svg {
      transform: rotate(180deg);
    }
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
