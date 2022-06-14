import React from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../../../../constants';
import { Table } from '../../../../../components';
import { Button, Title } from '../../../../../ui';
import { ITable } from '../../../../../@types/interfaces';

interface CheckoutProps {
  table: ITable[];
};

export const Checkout: React.FC<CheckoutProps> = ({ table }) => {
  const priceSum = (array: number[]): number => array.reduce((acc, next) => acc + next, 0);

  return (
    <form>
      <CheckoutTitle size='xl'>
        Checkout
      </CheckoutTitle>
      <Table table={table} />
      <Total>
        <TotalTitle>Total:</TotalTitle>
        <TotalSum>${priceSum(table.map(el => el.price))}</TotalSum>
      </Total>
      <FormButton>Purchase</FormButton>
    </form>
  );
};

const CheckoutTitle = styled(Title)`
  margin: 0 0 32px;
`;

const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 48px;
`;

const TotalTitle = styled.p`
  margin: 0;
  ${TYPOGRAPHY.specialHeadings[4]}
  color: ${COLORS.neutral[100]};
`;

const TotalSum = styled.p`
  margin: 0;
  ${TYPOGRAPHY.specialHeadings[4]}
  color: ${COLORS.neutral[100]};
`;

const FormButton = styled(Button)`
  min-width: 200px;
`;
