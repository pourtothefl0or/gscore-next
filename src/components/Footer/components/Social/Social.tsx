import React from 'react';
import styled from 'styled-components';
import { Facebook, LinkedIn, Twitter } from '../../../../assets/icons';
import { COLORS } from '../../../../constants';

export const Social: React.FC = () => {
  const socialArray = [
    {
      id: 1,
      href: '#',
      image: <Twitter />,
    },
    {
      id: 2,
      href: '#',
      image: <Facebook />,
    },
    {
      id: 3,
      href: '#',
      image: <LinkedIn />,
    },
  ];

  return (
    <StyledSocial>
      {socialArray.map(el =>
        <li key={el.id}>
          <SocialLink href={el.href}>
            {el.image}
          </SocialLink>
        </li>
      )}
    </StyledSocial>
  );
};

const StyledSocial = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const SocialLink = styled.a`
  color: ${COLORS.neutral[100]};
`;
