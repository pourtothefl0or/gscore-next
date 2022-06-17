import { FC } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import styled from 'styled-components';
import { Button, Input } from '../../../../../ui/components';

interface IFormFields {
  currentPassword: string;
  newPassword: string;
};

const Password: FC = () => {
  const {
    register,
    getFieldState,
    handleSubmit,
    formState: { errors, dirtyFields, isValid, isDirty }
  } = useForm<IFormFields>({
    mode: 'onChange',
    defaultValues: { currentPassword: '', newPassword: '', },
  });

  const onSubmit: SubmitHandler<IFormFields> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormFields>
        <Input
          type='password'
          placeholder='Current password'
          {...register('currentPassword', { required: true, minLength: 6 })}
          state={getFieldState('currentPassword')}
        />
        <Input
          type='password'
          placeholder='New password'
          {...register('newPassword', { required: true, minLength: 6 })}
          state={getFieldState('newPassword')}
        />
      </FormFields>
      <FormButton type='submit' disabled={!isValid}>Save</FormButton>
    </form>
  );
};

export default Password;

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
