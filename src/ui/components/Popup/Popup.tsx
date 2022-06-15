import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { Logout, Settings } from '../../iconComponents';
import { BREAKPOINTS, COLORS, TYPOGRAPHY, VARS } from '../../../constants';

interface Props {
  className?: string | 'is-open';
};

const Popup: FC<Props> = ({ className }) => {
  const popupArray = [
    {
      href: '/settings',
      image: <Settings />,
      text: 'Settings',
    },
    {
      href: '#',
      image: <Logout />,
      text: 'Logout',
    },
  ];

  return (
    <Root className={className}>
      {popupArray.map((obj, index) =>
        <li key={index}>
          <Link href={obj.href}>
            <PopupLink>
              {obj.image} {obj.text}
            </PopupLink>
          </Link>
        </li>
      )}
    </Root>
  );
};

export default Popup;

const Root = styled.ul`
  border-radius: ${VARS.radius[1]};
  background-color: ${COLORS.neutral[700]};
  transition: all ${VARS.animation};
  transition-property: opacity, visibility;
`;

const PopupLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  padding: 24px 52px 24px 24px;
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
    padding: 15px 0;
  }
`;
