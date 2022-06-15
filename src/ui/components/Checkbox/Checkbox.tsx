import { FC } from 'react';
import styled from 'styled-components';
import { Check } from '../../iconComponents'
import { COLORS, VARS } from '../../../constants';

const Checkbox: FC = () => {
  return (
    <Root>
      <CheckboxField type="checkbox" />
      <CheckboxItem>
        <Check />
      </CheckboxItem>
    </Root>
  );
};

export default Checkbox;

const Root = styled.label`
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

  &:checked {
    & ~ span {
      background-color: ${COLORS.accent.primary[1]};

      svg {
        opacity: 1;
        visibility: visible;
      }
    }

    &:focus ~ span {
      outline: 3px solid ${COLORS.accent.primary[1]}4d;
    }

    &:hover ~ span {
      outline: transparent;
      background-color: ${COLORS.system.red[400]};
    }
  }

  &:not(:checked) {
    &:focus ~ span {
      outline: 3px solid ${COLORS.neutral[400]}4d;
    }

    &:hover ~ span {
      outline: transparent;
      background-color: ${COLORS.neutral[400]};
    }
  }
`;

const CheckboxItem = styled.span`
  outline: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 7px;
  width: 26px;
  height: 26px;
  background-color: ${COLORS.neutral[500]};
  transition: all ${VARS.animation};
  transform-origin: outline, border, background-color, opacity, visibility;

  svg {
    opacity: 0;
    visibility: hidden;
    transition: all ${VARS.animation};
    transform-origin: opacity, visibility;
  }
`
