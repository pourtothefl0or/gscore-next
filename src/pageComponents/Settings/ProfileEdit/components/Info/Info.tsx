import React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import styled from 'styled-components';
import { Button, Input } from '../../../../../ui';

interface IFormFields {
  username: string;
  email: string;
};

export const Info: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<IFormFields>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IFormFields> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormFields>
        <Input
          className={errors.username && 'is-error'}
          type='text'
          placeholder='Username'
          {...register('username', { required: true })}
        />
        <Input
          className={errors.email && 'is-error'}
          type='email'
          placeholder='Email'
          {...register('email', { required: true })}
        />
      </FormFields>
      <FormButton type='submit' disabled={!isValid}>Save</FormButton>
    </form>
  );
};

const FormFields = styled.div`
  margin-bottom: 48px;
  max-width: 512px;

  > *:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const FormButton = styled(Button)`
  min-width: 160px;
`;
