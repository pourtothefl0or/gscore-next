import React from 'react';
import styled from 'styled-components';
import { VARS } from '../../constants';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 ${VARS.containerIndent};
  max-width: calc(${VARS.maxWidth} + ${VARS.containerIndent} * 2);
`;
