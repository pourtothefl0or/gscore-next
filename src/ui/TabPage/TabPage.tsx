import React from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../constants';
import { IStep } from '../../@types/interfaces';

interface TabPageProps {
  steps: IStep[];
  step: number;
  onClick: (id: number) => void;
};

export const TabPage: React.FC<TabPageProps> = ({ steps, step, onClick }) => {
  return (
    <Tab step={step}>
      {steps.map(el =>
        <TabItem key={el.id} onClick={() => onClick(el.id)}>
          <TabText>{el.title}</TabText>
        </TabItem>
      )}
    </Tab>
  );
};

const Tab = styled.ul<Omit<TabPageProps, 'steps' | 'onClick'>>`
  display: flex;
  border-bottom: 1px solid ${COLORS.neutral[600]};
  margin-bottom: 48px;

  li:nth-of-type(${props => props.step}) {
    p {
      color: ${COLORS.accent.primary[1]};

      &::after {
        background-color: ${COLORS.accent.primary[1]};
      }
    }
  }
`;

const TabItem = styled.li`
  cursor: pointer;
`;

const TabText = styled.p`
  --padding: 24px;

  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin: 0;
  padding: 0 var(--padding);
  ${TYPOGRAPHY.textSingle[200].bold}
  color: ${COLORS.neutral[600]};

  &::after {
    content: '';
    display: inline-block;
    width: calc(100% + var(--padding) * 2);
    height: 2px;
    background-color: ${COLORS.neutral[600]};
    transform: translate(calc(var(--padding) * -1), 1px);
  }
`;


