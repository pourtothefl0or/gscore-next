import { FC } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import styled from 'styled-components';
import { REGEX } from '../../../../../constants';
import { Button, Input } from '../../../../../ui/components';

interface IFormFields {
  username: string;
  email: string;
};

const Info: FC = () => {
  const {
    register,
    getFieldState,
    handleSubmit,
    formState: { errors, dirtyFields, isValid, isDirty }
  } = useForm<IFormFields>({
    mode: 'onChange',
    defaultValues: { username: '', email: '', },
  });

  const onSubmit: SubmitHandler<IFormFields> = data => console.log(data);

  return (
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
      </FormFields>
      <FormButton type='submit' disabled={!isValid}>Save</FormButton>
    </form>
  );
};

export default Info;

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
