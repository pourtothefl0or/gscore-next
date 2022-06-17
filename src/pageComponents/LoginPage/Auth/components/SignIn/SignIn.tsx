import { FC } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import styled from 'styled-components';
import { REGEX } from '../../../../../constants';
import { Button, Input, Title } from '../../../../../ui/components';

interface Props {
  nextStep: () => void;
};

interface IFormFields {
  email: string;
  password: string;
};

const SignIn: FC<Props> = ({ nextStep }) => {
  const {
    register,
    getFieldState,
    handleSubmit,
    formState: { errors, dirtyFields, isValid, isDirty }
  } = useForm<IFormFields>({
    mode: 'onChange',
    defaultValues: { email: '', password: '', },
  });

  const onSubmit: SubmitHandler<IFormFields> = data => {
    console.log(data);
    nextStep();
  };

  return (
    <>
      <SignInTitle size='xl'>
        Log in
      </SignInTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFields>
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
        <FormButton type='submit' disabled={!isValid}>Log in</FormButton>
      </form>
    </>
  );
};

export default SignIn;

const SignInTitle = styled(Title)`
  margin: 0 0 32px;
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
