import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../../components';
import { Info, Password } from './components';
import { COLORS } from '../../../constants';
import { IStep } from '../../../@types/interfaces';
import { TabPage, Title } from '../../../ui';

export const ProfileEdit: React.FC = () => {
  const steps: IStep[] = [
    { id: 1, title: 'Personal info', },
    { id: 2, title: 'Change password', },
  ];

  const [step, setStep] = useState<number>(steps[0].id);

  return (
    <StyledProfileEdit>
      <ProfileEditContainer>
        <ProfileEditTitle>
          Settings
        </ProfileEditTitle>
        <TabPage steps={steps} step={step} onClick={(id: number) => setStep(id)} />
        {step === steps[0].id && <Info />}
        {step === steps[1].id && <Password />}
      </ProfileEditContainer>
    </StyledProfileEdit>
  );
};

const StyledProfileEdit = styled.section`
  background-color: ${COLORS.neutral[800]};
`;

const ProfileEditContainer = styled(Container)`
  padding-top: 32px;
  padding-bottom: 42px;
`;

const ProfileEditTitle = styled(Title)`
  margin: 0 0 48px;
`;
