import React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import styled from 'styled-components';
import { Button, Input } from '../../../../../ui';

interface IFormFields {
  currentPassword: string;
  newPassword: string;
};

export const Password: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<IFormFields>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IFormFields> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormFields>
        <Input
          className={errors.currentPassword && 'is-error'}
          type='password'
          placeholder='Current password'
          {...register('currentPassword', { required: true, minLength: 6 })}
        />
        <Input
          className={errors.newPassword && 'is-error'}
          type='password'
          placeholder='New password'
          {...register('newPassword', { required: true, minLength: 6 })}
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
