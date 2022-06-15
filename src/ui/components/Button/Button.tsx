import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styled from 'styled-components';
import { COLORS, VARS, TYPOGRAPHY } from '../../../constants';
import { Loader } from "../../iconComponents";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: 'primary' | 'secondary';
  isLoader?: boolean;
  children?: ReactNode;
};

export enum ButtonTheme {
  primary = 'primary',
  secondary = 'secondary',
};

const Button: FC<Props> = ({ theme = ButtonTheme.primary , children, ...props}) => {
  return (
    <Root theme={theme} {...props}>
      {!props.isLoader && children}
      {props.isLoader && <Loader />}
    </Root>
  );
};

export default Button;

const Root = styled.button<Omit<Props, 'children'>>`
  outline: transparent;
  border-radius: 4px;
  padding: 20px 24px;
  min-width: 105px;
  ${TYPOGRAPHY.textSingle[100].bold}
  text-align: center;
  box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
  transition: all ${VARS.animation};
  transition-property: outline, color, background-color, opacity, transform;

  &:disabled {
    opacity: 0.6;
  }

  @keyframes rotate {
    from {
      transform: rotate(-360deg);
    }
  }

  ${({ theme }) => theme === ButtonTheme.primary &&`
    color: ${COLORS.neutral[100]};
    background-color: ${COLORS.accent.primary[1]};

    &:not(:disabled):hover {
      background-color: ${COLORS.system.red[400]};
    }

    &:not(:hover):focus {
      outline: 3px solid ${COLORS.accent.primary[1]}4d;
    }
  `}

  ${({ theme }) => theme === ButtonTheme.secondary &&`
    color: ${COLORS.accent.primary[1]};
    background-color: ${COLORS.neutral[100]};

    &:not(:disabled):hover {
      color: ${COLORS.system.red[400]};
    }

    &:not(:hover):focus {
      outline: 3px solid ${COLORS.neutral[100]}4d;
    }
  `}

  ${({ isLoader }) => isLoader &&`
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      animation: rotate 1s linear infinite;
    }
  `};
`;
