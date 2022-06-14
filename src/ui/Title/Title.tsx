import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, COLORS, TYPOGRAPHY } from '../../constants';

interface TitleProps {
  className?: string;
  size?: 'xxl' | 'xl';
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ className, size = 'xxl', children }) => {
  return (
    <StyledTitle className={className} size={size}>{children}</StyledTitle>
  );
}

const StyledTitle = styled.h1<Omit<TitleProps, 'className' | 'children'>>`
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
