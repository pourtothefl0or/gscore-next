import { FC } from 'react';
import styled from 'styled-components';
import { NoSubs } from '../../../../../ui/iconComponents';
import { COLORS, TYPOGRAPHY } from '../../../../../constants';
import { ButtonLink } from '../../../../../ui/components';
import Link from 'next/link';

const LicensesEmpty: FC = () => {
  return (
    <Root>
      <NoSubs />
      <Title>
        No active subscriptions
      </Title>
      <Description>
        You can subscribe right now by clicking on the button below
      </Description>
      <Link href="/">
        <ButtonLink>Get GScore</ButtonLink>
      </Link>
    </Root>
  );
};

export default LicensesEmpty;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 200px;
`;

const Title = styled.h2`
  margin: 24px 0 8px;
  max-width: 431px;
  ${TYPOGRAPHY.specialHeadings[4]}
  color: ${COLORS.neutral[100]};
`;

const Description = styled.p`
  margin: 0 0 32px;
  max-width: 431px;
  ${TYPOGRAPHY.paragraph.default}
  color: ${COLORS.neutral[100]};
`;
