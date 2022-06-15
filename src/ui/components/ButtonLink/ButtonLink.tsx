import { AnchorHTMLAttributes, FC, ReactNode } from 'react';
import styled from 'styled-components';
import { COLORS, VARS, TYPOGRAPHY } from '../../../constants';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  theme?: 'primary' | 'secondary';
  children?: ReactNode;
};

export enum ButtonLinkTheme {
  primary = 'primary',
  secondary = 'secondary',
};

const ButtonLink: FC<Props> = ({ theme = ButtonLinkTheme.primary , children, ...props}) => {
  return <Root theme={theme} {...props}>{children}</Root>;
};

export default ButtonLink;

const Root = styled.a<Omit<Props, 'children'>>`
  outline: transparent;
  border-radius: 4px;
  padding: 20px 24px;
  min-width: 105px;
  ${TYPOGRAPHY.textSingle[100].bold}
  text-align: center;
  box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
  transition: all ${VARS.animation};
  transition-property: outline, color, background-color, opacity;

  &:disabled {
    opacity: 0.6;
  }

  ${({ theme }) => theme === ButtonLinkTheme.primary &&`
    color: ${COLORS.neutral[100]};
    background-color: ${COLORS.accent.primary[1]};

    &:not(:disabled):hover {
      background-color: ${COLORS.system.red[400]};
    }

    &:not(:hover):focus {
      outline: 3px solid ${COLORS.accent.primary[1]}4d;
    }
  `}

  ${({ theme }) => theme === ButtonLinkTheme.secondary &&`
    color: ${COLORS.accent.primary[1]};
    background-color: ${COLORS.neutral[100]};

    &:not(:disabled):hover {
      color: ${COLORS.system.red[400]};
    }

    &:not(:hover):focus {
      outline: 3px solid ${COLORS.neutral[100]}4d;
    }
  `}
`;
