import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, COLORS, TYPOGRAPHY } from '../../../constants';

interface Props {
  className?: string;
  size?: 'xxl' | 'xl';
  children: ReactNode;
};

interface IRoot {
  $size: 'xxl' | 'xl';
};

const Title: FC<Props> = ({ className, size = 'xxl', children }) => {
  return <Root className={className} $size={size}>{children}</Root>;
};

export default Title;

const Root = styled.h1<IRoot>`
  color: ${COLORS.neutral[100]};

  ${({ $size }) => $size === 'xxl' &&`
    ${TYPOGRAPHY.specialHeadings[2]}

    @media (max-width: ${BREAKPOINTS.tablet.max}) {
      ${TYPOGRAPHY.specialHeadings[4]}
    }
  `}

  ${({ $size }) => $size === 'xl' &&`
    ${TYPOGRAPHY.specialHeadings[3]}

    @media (max-width: ${BREAKPOINTS.tablet.max}) {
      ${TYPOGRAPHY.specialHeadings[4]}
    }
  `}
`;
