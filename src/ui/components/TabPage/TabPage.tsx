import { FC } from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../../constants';
import { IStep } from '../../../types/index';

interface Props {
  steps: IStep[];
  step: number;
  onClick: (id: number) => void;
};

interface ITabItem {
  $step: number;
};

const TabPage: FC<Props> = ({ steps, step, onClick }) => {
  return (
    <Tab>
      {steps.map(obj =>
        <TabItem
          key={obj.id}
          onClick={() => onClick(obj.id)}
          $step={step}
        >
          <TabText>{obj.title}</TabText>
        </TabItem>
      )}
    </Tab>
  );
};

export default TabPage;

const Tab = styled.ul`
  display: flex;
  border-bottom: 1px solid ${COLORS.neutral[600]};
  margin-bottom: 48px;
`;

const TabItem = styled.li<ITabItem>`
  cursor: pointer;

  &:nth-of-type(${({ $step }) => $step}) {
    p {
      color: ${COLORS.accent.primary[1]};

      &::after {
        background-color: ${COLORS.accent.primary[1]};
      }
    }
  }
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


