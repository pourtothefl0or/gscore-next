import { FC, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../../components';
import { Info, Password } from './components';
import { COLORS } from '../../../constants';
import { IStep } from '../../../types/index';
import { TabPage, Title } from '../../../ui/components';

const steps: IStep[] = [
  { id: 1, title: 'Personal info', },
  { id: 2, title: 'Change password', },
];

enum Steps {
  info = steps[0].id,
  password = steps[1].id,
};


const ProfileEdit: FC = () => {
  const [step, setStep] = useState<number>(Steps.info);

  return (
    <Root>
      <ProfileEditContainer>
        <ProfileEditTitle>
          Settings
        </ProfileEditTitle>
        <TabPage
          steps={steps}
          step={step}
          onClick={(id: number) => setStep(id)}
        />
        {step === Steps.info && <Info />}
        {step === Steps.password && <Password />}
      </ProfileEditContainer>
    </Root>
  );
};

export default ProfileEdit;

const Root = styled.section`
  background-color: ${COLORS.neutral[800]};
`;

const ProfileEditContainer = styled(Container)`
  padding-top: 32px;
  padding-bottom: 42px;
`;

const ProfileEditTitle = styled(Title)`
  margin: 0 0 48px;
`;
