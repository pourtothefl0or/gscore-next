import { FC, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../../components';
import { SignUp, SignIn, Checkout } from './components';
import { COLORS, VARS } from '../../../constants';
import { TabSteps } from '../../../ui/components';
import { IStep, ITable } from '../../../types/index';

const tableArray: ITable[] = [
  {
    id: 1,
    title: 'Single site license',
    price: 77,
  },
];

const steps: IStep[] = [
  { id: 1, title: 'Create account', },
  { id: 2, title: 'Log in', },
  { id: 3, title: 'Checkout', },
];

enum Steps {
  signUp = steps[0].id,
  signIn = steps[1].id,
  checkout = steps[2].id,
};

const Auth: FC = () => {
  const [step, setStep] = useState(Steps.signUp);

  return (
    <Root>
      <AuthContainer>
        <TabSteps steps={steps} step={step} />
        {step === Steps.signUp && <SignUp nextStep={() => setStep(Steps.signIn)} />}
        {step === Steps.signIn && <SignIn nextStep={() => setStep(Steps.checkout)} />}
        {step === Steps.checkout && <Checkout table={tableArray} />}
      </AuthContainer>
    </Root>
  );
};

export default Auth;

const Root = styled.section`
  background-color: ${COLORS.neutral[800]};
`;

const AuthContainer = styled(Container)`
  padding-top: 32px;
  padding-bottom: 42px;
  max-width: calc(620px + ${VARS.containerIndent} * 2);
`;
