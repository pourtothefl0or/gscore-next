import React from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../constants';
import { IStatus } from '../../@types/interfaces';

interface StatusProps {
  status: IStatus;
};

export const Status: React.FC<StatusProps> = ({ status = 'Active' }) => {
  return (
    <StyledStatus status={status}>{status}</StyledStatus>
  );
};

const StyledStatus = styled.p<StatusProps>`
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
