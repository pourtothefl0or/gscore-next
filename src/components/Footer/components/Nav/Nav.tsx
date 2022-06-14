import React from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../../../constants';

export const Nav: React.FC = () => {
  return (
    <StyledNav>
      <Item>
        <NavText>Copyright &copy; 2022 GScore</NavText>
      </Item>
      <Item>
        <NavText>All Rights Reserved</NavText>
      </Item>
      <Item>
        <NavLink href="#">Cookies</NavLink>
      </Item>
      <Item>
        <NavLink href="#">Privacy Policy</NavLink>
      </Item>
    </StyledNav>
  );
};

const StyledNav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 8px;
`;

const Item = styled.li`
  &:not(:last-child) {
    position: relative;
    margin-right: 16px;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      right: -8px;
      width: 2px;
      height: 20px;
      background-color: ${COLORS.neutral[400]};
      transform: translateY(-50%);
    }
  }
`;

const NavText = styled.p`
  margin: 0;
  ${TYPOGRAPHY.paragraph.default};
  color: ${COLORS.neutral[400]};
`;

const NavLink = styled.a`
  display: inline-flex;
  margin: 0;
  ${TYPOGRAPHY.paragraph.default};
  color: ${COLORS.neutral[100]};
  text-decoration: underline;
`;
