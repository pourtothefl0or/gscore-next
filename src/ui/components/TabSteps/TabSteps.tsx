import { FC } from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, COLORS, TYPOGRAPHY } from '../../../constants';
import { IStep } from '../../../types/index';

interface Props {
  steps: IStep[];
  step: number;
};

interface TabItem {
  $step: number;
};

const TabSteps: FC<Props> = ({ steps, step }) => {
  return (
    <Tab>
      {steps.map(obj =>
        <TabItem
          key={obj.id}
          $step={step}
        >
          <TabText>{obj.title}</TabText>
        </TabItem>
      )}
    </Tab>
  );
};

export default TabSteps;

const Tab = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 64px;

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    margin-bottom: 48px;
  }
`;

const TabItem = styled.li<TabItem>`
  width: 100%;

  &:nth-of-type(-n+${({ $step }) => $step}) {
    p::after {
      background-color: ${COLORS.accent.primary[1]};
    }
  }
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

