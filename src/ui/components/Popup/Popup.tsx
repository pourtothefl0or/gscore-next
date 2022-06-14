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
      {popupArray.map((el, index) =>
        <li key={index}>
          <Link href={el.href}>
            <PopupLink>
              {el.image} {el.text}
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
