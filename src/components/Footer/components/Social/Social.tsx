import { FC } from 'react';
import styled from 'styled-components';
import { Facebook, LinkedIn, Twitter } from '../../../../ui/iconComponents';
import { COLORS, VARS } from '../../../../constants';

const socialArray = [
  { href: '#', image: <Twitter />, },
  { href: '#', image: <Facebook />, },
  { href: '#', image: <LinkedIn />, },
];

const Social: FC = () => {
  return (
    <Root>
      {socialArray.map((obj, index) =>
        <li key={index}>
          <SocialLink href={obj.href}>
            {obj.image}
          </SocialLink>
        </li>
      )}
    </Root>
  );
};

export default Social;

const Root = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const SocialLink = styled.a`
  color: ${COLORS.neutral[100]};
  transition: color ${VARS.animation};

  &:focus {
    color: ${COLORS.accent.primary[1]};
  }

  &:hover {
    color: ${COLORS.system.red[400]};
  }
`;
