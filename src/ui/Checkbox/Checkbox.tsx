import React from 'react';
import styled from 'styled-components';
import { Check } from '../../assets/icons';
import { COLORS } from '../../constants';

export const Checkbox: React.FC = () => {
  return (
    <StyledCheckbox>
      <CheckboxField type="checkbox" />
      <CheckboxItem><Check /></CheckboxItem>
    </StyledCheckbox>
  )
}

const StyledCheckbox = styled.label`
  cursor: pointer;
`;

const CheckboxField = styled.input`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
  border: 0 !important;
  padding: 0 !important;
  clip: rect(0 0 0 0) !important;
  overflow: hidden !important;

  &:disabled ~ span {
    opacity: 0.6;
  }

  &:checked ~ span {
    border-color: ${COLORS.accent.primary[1]};
    background-color: ${COLORS.accent.primary[1]};

    svg {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const CheckboxItem = styled.span`
  --size: 26px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLORS.neutral[600]};
  border-radius: 7px;
  width: var(--size);
  height: var(--size);
  background-color: ${COLORS.neutral[500]};

  svg {
    opacity: 0;
    visibility: hidden;
  }
`
