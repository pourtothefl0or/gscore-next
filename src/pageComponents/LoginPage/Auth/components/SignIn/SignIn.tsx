import { FC } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import styled from 'styled-components';
import { Button, Input, Title } from '../../../../../ui/components';

interface Props {
  nextStep: () => void;
};

interface IFormFields {
  email: string;
  password: string;
};

const SignIn: FC<Props> = ({ nextStep }) => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<IFormFields>({ mode: 'onChange' });

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
            className={errors.email && 'is-error'}
            type='email'
            placeholder='Email'
            {...register('email', { required: true })}
          />
          <Input
            className={errors.password && 'is-error'}
            type='password'
            placeholder='Password'
            {...register('password', { required: true, minLength: 6 })}
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
