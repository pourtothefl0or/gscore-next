import React from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../../../../constants';
import { ITable } from '../../../../../@types/interfaces';
import { Table } from '../../../../../components';
import { Button } from '../../../../../ui';

interface ChequeProps {
  table: ITable[];
};

export const Cheque: React.FC<ChequeProps> = ({ table }) => {
  return (
    <>
      <Title>
        Start your subscription
      </Title>
      <Description>
        We have sent you a payment receipt by e-mail and a link to download the plugin with a license key.
      </Description>
      <Table table={table} />
      <FormButton>Go to my subscriptions</FormButton>
    </>
  );
};

const Title = styled.h1`
  margin: 0 0 16px;
  ${TYPOGRAPHY.specialHeadings[3]}
  color: ${COLORS.neutral[100]};
`;

const Description = styled.p`
  margin: 0 0 32px;
  ${TYPOGRAPHY.paragraph.small}
  color: ${COLORS.neutral[100]};
`;

const FormButton = styled(Button)`
  width: 100%;
`;
