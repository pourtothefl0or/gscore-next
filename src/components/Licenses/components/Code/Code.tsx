import React from 'react';
import styled from 'styled-components';
import { Copy } from '../../../../assets/icons';
import { BREAKPOINTS, COLORS, TYPOGRAPHY, VARS } from '../../../../constants';
import { IStatus, ISubsLicense } from '../../../../@types/interfaces';
import { Button, Checkbox, Status } from '../../../../ui';

export const Code: React.FC<ISubsLicense> = ({ ...props }) => {
  return (
    <StyledCode status={props.status}>
      <Column className='checkbox'>
        <Title></Title>
        <Checkbox />
      </Column>
      <Column className='code'>
        <Title>License code</Title>
        <Wrapper className='button'>
          <Text>{props.code}</Text>
          <CodeCopy><Copy /></CodeCopy>
        </Wrapper>
      </Column>
      <Column className='domain'>
        <Title>Domain</Title>
        <Wrapper>
          <Text>{props.domain}</Text>
        </Wrapper>
      </Column>
      {props.status === 'Inactive' &&
        <Column className='button'>
          <Title></Title>
          <Button theme='secondary'>Activate</Button>
        </Column>
      }
      <Column className='status'>
        <Title>Status</Title>
        <Status status={props.status} />
      </Column>
    </StyledCode>
  );
};

const StyledCode = styled.div<{ status: IStatus }>`
  display: grid;
  grid-template-columns:
    ${props => props.status !== 'Inactive'
      ? '28px 300px minmax(300px, 1fr) 80px;'
      : '28px 300px minmax(300px, 650px) 1fr 80px;'
    };
  gap: 24px 28px;
  border-radius: ${VARS.radius[1]};
  padding: 24px 32px 32px;
  background-color: ${COLORS.neutral[700]};

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    grid-template-columns: 28px 85px 1fr;
    grid-template-areas:
      "checkbox status button"
      "code code code"
      "domain domain domain";
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  > *:nth-child(2) {
    margin: auto 0;
  }

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    &.checkbox {
      grid-area: checkbox;
    }

    &.code {
      grid-area: code;
    }

    &.domain {
      grid-area: domain;
    }

    &.button {
      grid-area: button;
      margin-left: auto;
    }

    &.status {
      grid-area: status;
    }

    &.checkbox,
    &.button,
    &.status {
      .title {
        display: none;
      }
    }
  }
`;

const Title = styled.p.attrs({
  className: 'title',
})`
  margin: 0;
  min-height: 18px;
  ${TYPOGRAPHY.textSingle[100].bold}
  color: ${COLORS.neutral[500]};
`;

const Wrapper = styled.div`
  border-radius: ${VARS.radius[2]};
  padding: 18px 24px;
  background-color: ${COLORS.neutral[600]};

  &.button {
    position: relative;
    padding-right: calc(34px + 32px + 24px);

    button {
      position: absolute;
      top: 50%;
      right: 24px;
      transform: translateY(-50%);
    }
  }
`;

const Text = styled.p`
  overflow: hidden;
  margin: 0;
  ${TYPOGRAPHY.textSingle[100].regular}
  color: ${COLORS.neutral[500]};
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CodeCopy = styled.button`
  color: ${COLORS.neutral[100]};
`;
