import { FC, forwardRef, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Error, Success } from '../../iconComponents';
import { COLORS, TYPOGRAPHY, VARS } from '../../../constants';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string | 'is-success' | 'is-error';
  type: 'text' | 'email' | 'password';
  placeholder: string;
  state?: any; // FIX TYPE (UseFormGetFieldState)
};

interface IField {
  $state: any; // FIX TYPE (UseFormGetFieldState)
};

const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(({ className, type, placeholder, state, ...props }, ref) => {
  return (
    <Root className={className}>
      <FieldWrapper>
        <Field
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...props}
          $state={state}
        />
        {state.isDirty && !state.invalid && <Success />}
        {state.invalid && <Error />}
      </FieldWrapper>
      {state.invalid && <Alert>Error text</Alert>}
    </Root>
  );
});

export default Input;

const Root = styled.label`
  display: block;
`;

const FieldWrapper = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  svg {
    position: absolute;
    top: 50%;
    right: 23px;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;;
  }
`;

const Field = styled.input<IField>`
  border: 1px solid ${COLORS.neutral[300]};
  border-radius: ${VARS.radius[2]};
  padding: 25px 23px;
  width: 100%;
  ${TYPOGRAPHY.textSingle[100].regular}
  background-color: ${COLORS.neutral[100]};
  color: ${COLORS.neutral[600]};
  caret-color: ${COLORS.accent.primary[1]};

  &::placeholder {
    color: ${COLORS.neutral[500]};
  }

  ${({ $state }) => $state.invalid &&`
    border-color: ${COLORS.system.red[300]};
    padding-right: calc(24px + 23px * 2);
  `}

  ${({ $state }) => $state.isDirty && !$state.invalid &&`
    border-color: ${COLORS.system.green[300]};
    padding-right: calc(24px + 23px * 2);
  `}
`;

const Alert = styled.p`
  margin: 2px 0 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${COLORS.system.red[300]};
`;
