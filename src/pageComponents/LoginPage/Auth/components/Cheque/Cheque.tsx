import { FC } from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../../../../constants';
import { ITable } from '../../../../../types/interfaces';
import { Table } from '../../../../../components';
import { Button } from '../../../../../ui/components';

interface Props {
  table: ITable[];
};

const Cheque: FC<Props> = ({ table }) => {
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

export default Cheque;

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
