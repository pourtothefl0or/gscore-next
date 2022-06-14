import { FC, forwardRef, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Error, Success } from '../../iconComponents';
import { COLORS, TYPOGRAPHY, VARS } from '../../../constants';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string | 'is-success' | 'is-error';
  type: 'text' | 'email' | 'password';
  placeholder: string;
};

const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(({ className, type, placeholder, ...props }, ref) => {
  const isSuccess = (): boolean | undefined => className?.includes('is-success');
  const isError = (): boolean | undefined => className?.includes('is-error');

  return (
    <Root className={className}>
      <FieldWrapper>
        <Field
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        {isSuccess() && <Success />}
        {isError() && <Error />}
      </FieldWrapper>
      {isError() && <Alert>Error text</Alert>}
    </Root>
  );
});

export default Input;

const Root = styled.label`
  display: block;

  &.is-success {
    input {
      border-color: ${COLORS.system.green[300]};
      padding-right: calc(24px + 23px * 2);
    }
  }

  &.is-error {
    input {
      border-color: ${COLORS.system.red[300]};
      padding-right: calc(24px + 23px * 2);
    }
  }
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

const Field = styled.input`
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
`;

const Alert = styled.p`
  margin: 2px 0 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${COLORS.system.red[300]};
`;
