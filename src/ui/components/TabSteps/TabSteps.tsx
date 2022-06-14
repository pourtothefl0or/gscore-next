import { FC } from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, COLORS, TYPOGRAPHY } from '../../../constants';
import { IStep } from '../../../types/interfaces';

interface Props {
  steps: IStep[];
  step: number;
};

const TabSteps: FC<Props> = ({ steps, step }) => {
  return (
    <Tab step={step}>
      {steps.map(el =>
        <TabItem key={el.id}>
          <TabText>{el.title}</TabText>
        </TabItem>
      )}
    </Tab>
  );
};

export default TabSteps;

const Tab = styled.ul<Omit<Props, 'steps'>>`
  display: flex;
  gap: 16px;
  margin-bottom: 64px;

  li:nth-of-type(-n+${props => props.step}) {
    p::after {
      background-color: ${COLORS.accent.primary[1]};
    }
  }

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    margin-bottom: 48px;
  }
`;

const TabItem = styled.li`
  width: 100%;
`;

const TabText = styled.p`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  height: 100%;
  ${TYPOGRAPHY.textSingle[300].medium}
  color: ${COLORS.neutral[100]};

  &::after {
    content: '';
    display: inline-block;
    margin-top: auto;
    border-radius: 8px;
    width: 100%;
    height: 8px;
    background-color: ${COLORS.neutral[600]};
  }
`;

