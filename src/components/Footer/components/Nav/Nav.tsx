import { FC } from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY, VARS } from '../../../../constants';

const Nav: FC = () => {
  return (
    <Root>
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
    </Root>
  );
};

export default Nav;

const Root = styled.ul`
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
  text-decoration: underline;
  color: ${COLORS.neutral[100]};
  transition: color ${VARS.animation};

  &:focus {
    color: ${COLORS.accent.primary[1]};
  }

  &:hover {
    color: ${COLORS.system.red[400]};
  }
`;
