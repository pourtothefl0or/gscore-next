import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, COLORS, TYPOGRAPHY } from '../../../constants';

interface Props {
  className?: string;
  size?: 'xxl' | 'xl';
  children: ReactNode;
}

const Title: FC<Props> = ({ className, size = 'xxl', children }) => {
  return <Root className={className} size={size}>{children}</Root>;
};

export default Title;

const Root = styled.h1<Omit<Props, 'className' | 'children'>>`
  color: ${COLORS.neutral[100]};

  ${props => props.size === 'xxl' &&`
    ${TYPOGRAPHY.specialHeadings[2]}

    @media (max-width: ${BREAKPOINTS.tablet.max}) {
      ${TYPOGRAPHY.specialHeadings[4]}
    }
  `}

  ${props => props.size === 'xl' &&`
    ${TYPOGRAPHY.specialHeadings[3]}

    @media (max-width: ${BREAKPOINTS.tablet.max}) {
      ${TYPOGRAPHY.specialHeadings[4]}
    }
  `}
`;
