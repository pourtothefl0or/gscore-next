import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { VARS } from '../../constants';

interface Props {
  className?: string;
  children: ReactNode;
};

const Container: FC<Props> = ({ className, children }) => {
  return <Root className={className}>{children}</Root>;
};

export default Container;

const Root = styled.div`
  margin: 0 auto;
  padding: 0 ${VARS.containerIndent};
  max-width: calc(${VARS.maxWidth} + ${VARS.containerIndent} * 2);
`;
