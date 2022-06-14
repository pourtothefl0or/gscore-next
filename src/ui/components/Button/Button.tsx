import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styled from 'styled-components';
import { COLORS, VARS, TYPOGRAPHY } from '../../../constants';
import { Loader } from "../../iconComponents";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: 'property' | 'secondary';
  isLoader?: boolean;
  children?: ReactNode;
};

const Button: FC<Props> = ({ theme = 'property', children, ...props}) => {
  return (
    <Root theme={theme} {...props}>
      {!props.isLoader && children}
      {props.isLoader && <Loader />}
    </Root>
  );
};

export default Button;

const Root = styled.button<Omit<Props, 'children'>>`
  border-radius: 4px;
  padding: 20px 24px;
  min-width: 105px;
  ${TYPOGRAPHY.textSingle[100].bold}
  text-align: center;
  box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
  transition: transform ${VARS.animation};

  &:disabled {
    opacity: 0.6;
  }

  @keyframes rotate {
    from {
      transform: rotate(-360deg);
    }
  }

  ${props => props.theme === 'property' &&`
    color: ${COLORS.neutral[100]};
    background-color: ${COLORS.accent.primary[1]};
  `}

  ${props => props.theme === 'secondary' &&`
    color: ${COLORS.accent.primary[1]};
    background-color: ${COLORS.neutral[100]};
  `}

  ${props => props.isLoader &&`
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      animation: rotate 1s linear infinite;
    }
  `};
`;
