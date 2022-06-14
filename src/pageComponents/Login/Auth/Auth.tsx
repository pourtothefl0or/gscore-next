import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../../components';
import { SignUp, SignIn, Checkout, Cheque } from './components';
import { COLORS, VARS } from '../../../constants';
import { TabSteps } from '../../../ui';
import { IStep, ITable } from '../../../@types/interfaces';

export const Auth: React.FC = () => {
  const steps: IStep[] = [
    { id: 1, title: 'Create account', },
    { id: 2, title: 'Log in', },
    { id: 3, title: 'Checkout', },
  ];

  const [step, setStep] = useState<number>(steps[0].id);

  const tableArray: ITable[] = [
    {
      id: 1,
      title: 'Single site license',
      price: 77,
    },
  ];

  return (
    <StyledAuth>
      <AuthContainer>
        <TabSteps steps={steps} step={step} />
        {step === steps[0].id && <SignUp nextStep={() => setStep(steps[1].id)} />}
        {step === steps[1].id && <SignIn nextStep={() => setStep(steps[2].id)} />}
        {step === steps[2].id && <Checkout table={tableArray} />}
        {/* <Cheque table={tableArray} /> */}
      </AuthContainer>
    </StyledAuth>
  );
};

const StyledAuth = styled.section`
  background-color: ${COLORS.neutral[800]};
`;

const AuthContainer = styled(Container)`
  padding-top: 32px;
  padding-bottom: 42px;
  max-width: calc(620px + ${VARS.containerIndent} * 2);
`;
