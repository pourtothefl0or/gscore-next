import React from 'react';
import styled from 'styled-components';
import { NoSubs } from '../../../../../assets/icons';
import { COLORS, TYPOGRAPHY } from '../../../../../constants';
import { Button } from '../../../../../ui';

export const LicensesEmpty: React.FC = () => {
  return (
    <StyledLicensesEmpty>
      <NoSubs />
      <Title>
        No active subscriptions
      </Title>
      <Description>
        You can subscribe right now by clicking on the button below
      </Description>
      <Button>Get GScore</Button>
    </StyledLicensesEmpty>
  );
};

const StyledLicensesEmpty = styled.div`
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
