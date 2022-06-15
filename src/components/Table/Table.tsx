import { FC } from 'react';
import styled from 'styled-components';
import { Basket } from '../../ui/iconComponents';
import { COLORS, TYPOGRAPHY, VARS } from '../../constants';
import { ITable } from '../../types/index';

interface Props {
  table: ITable[];
};

const Table: FC<Props> = ({ table }) => {
  return (
    <Root>
      <TableRow>
        <TableHeader>Package name</TableHeader>
        <TableHeader>Price</TableHeader>
      </TableRow>
      {table.map(obj =>
        <TableRow key={obj.id}>
          <TableBody>{obj.title}</TableBody>
          <TableBody className="price">
            ${obj.price}<Basket />
          </TableBody>
        </TableRow>
      )}
    </Root>
  );
};

export default Table;

const Root = styled.div`
  margin: 0 0 24px;
  border-radius: ${VARS.radius[1]};
  padding: 12px 0;
  background-color: ${COLORS.neutral[700]};
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: auto 100px;
  align-items: center;
  padding: 32px;

  &:first-child {
    border-bottom: 1px solid ${COLORS.neutral[500]};
  }
`;

const TableHeader = styled.p`
  margin: 0;
  ${TYPOGRAPHY.headings[3]}
  color: ${COLORS.neutral[100]};
`;

const TableBody = styled.p`
  margin: 0;
  ${TYPOGRAPHY.paragraph.large}
  color: ${COLORS.neutral[100]};

  &.price {
    display: inline-flex;
    align-items: center;
    gap: 9px;
  }
`;
