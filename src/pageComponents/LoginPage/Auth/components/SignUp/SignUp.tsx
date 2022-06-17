import { FC } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import styled from 'styled-components';
import { COLORS, REGEX, TYPOGRAPHY, VARS } from '../../../../../constants';
import { Button, Input, Title } from '../../../../../ui/components';

interface Props {
  nextStep: () => void;
};

interface IFormFields {
  username: string;
  email: string;
  password: string;
};

const SignUp: FC<Props> = ({ nextStep }) => {
  const {
    register,
    getFieldState,
    handleSubmit,
    formState: { errors, dirtyFields, isValid, isDirty }
  } = useForm<IFormFields>({
    mode: 'onChange',
    defaultValues: { username: '', email: '', password: '', },
  });

  const onSubmit: SubmitHandler<IFormFields> = data => {
    console.log(data);
    nextStep();
  };

  return (
    <>
      <SignUpTitle size='xl'>
        Create account
      </SignUpTitle>
      <Description>
        You need to enter your name and email. We will send you a temporary password by email
      </Description>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFields>
          <Input
            type='text'
            placeholder='Username'
            {...register('username', { required: true })}
            state={getFieldState('username')}
          />
          <Input
            type='email'
            placeholder='Email'
            {...register('email', { required: true, pattern: REGEX.email })}
            state={getFieldState('email')}
          />
          <Input
            type='password'
            placeholder='Password'
            {...register('password', { required: true, minLength: 6 })}
            state={getFieldState('password')}
          />
        </FormFields>
        <FormButton type='submit' disabled={!isValid}>Send password</FormButton>
      </form>
      <Next>
        <NextText>Have an account?</NextText>
        <NextButton onClick={() => nextStep()}>Go to the next step</NextButton>
      </Next>
    </>
  );
};

export default SignUp;

const SignUpTitle = styled(Title)`
  margin: 0 0 16px;
`;

const Description = styled.p`
  margin: 0 0 32px;
  ${TYPOGRAPHY.paragraph.small}
  color: ${COLORS.neutral[100]};
`;

const FormFields = styled.div`
  margin-bottom: 48px;

  > *:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const FormButton = styled(Button)`
  min-width: 200px;
`;

const Next = styled.div`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 48px;
`;

const NextText = styled.p`
  margin: 0;
  ${TYPOGRAPHY.paragraph.default}
  color: ${COLORS.neutral[100]};
`;

const NextButton = styled.button`
  margin: 0;
  ${TYPOGRAPHY.paragraph.default}
  color: ${COLORS.accent.primary[1]};
  transition: color ${VARS.animation};

  &:hover {
    color: ${COLORS.system.red[400]}
  }
`;
