import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Logout, Settings } from '../../assets/icons';
import { BREAKPOINTS, COLORS, TYPOGRAPHY, VARS } from '../../constants';

interface PopupProps {
  className?: string | 'is-open';
};

export const Popup: React.FC<PopupProps> = ({ className }) => {
  const popupArray = [
    {
      id: 1,
      href: '/settings',
      image: <Settings />,
      text: 'Settings',
    },
    {
      id: 2,
      href: '#',
      image: <Logout />,
      text: 'Logout',
    },
  ];

  return (
    <StyledPopup className={className}>
      {popupArray.map(el =>
        <li key={el.id}>
          <Link href={el.href}>
            <PopupLink>
              {el.image} {el.text}
            </PopupLink>
          </Link>
        </li>
      )}
    </StyledPopup>
  );
};

const StyledPopup = styled.ul`
  border-radius: ${VARS.radius[1]};
  background-color: ${COLORS.neutral[700]};
  opacity: 0;
  visibility: hidden;

  &.is-open {
    opacity: 1;
    visibility: visible;
  }
`;

const PopupLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  padding: 24px 52px 24px 24px;
  ${TYPOGRAPHY.textSingle[300].regular}
  color: ${COLORS.neutral[100]};

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    padding: 15px 0;
  }
`;
