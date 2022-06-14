import { FC } from 'react';
import styled from 'styled-components';
import { Facebook, LinkedIn, Twitter } from '../../../../ui/iconComponents';
import { COLORS } from '../../../../constants';

const Social: FC = () => {
  const socialArray = [
    { href: '#', image: <Twitter />, },
    { href: '#', image: <Facebook />, },
    { href: '#', image: <LinkedIn />, },
  ];

  return (
    <Root>
      {socialArray.map((el, index) =>
        <li key={index}>
          <SocialLink href={el.href}>
            {el.image}
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
`;
