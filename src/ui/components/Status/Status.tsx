import { FC } from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../../constants';
import { IStatus } from '../../../types/interfaces';

interface Props {
  status: IStatus;
};

const Status: FC<Props> = ({ status = 'Active' }) => {
  return <Root status={status}>{status}</Root>;
};

export default Status;

const Root = styled.p<Props>`
  margin: 0;
  ${TYPOGRAPHY.headings[4]}

  ${props => {
    switch (props.status) {
      case 'Active':
        return `color: ${COLORS.system.green[300]};`;
      case 'Inactive':
        return `color: ${COLORS.system.red[300]};`;
      case 'Hold':
        return `color: ${COLORS.system.orange[300]};`;
    }
  }}
`;
