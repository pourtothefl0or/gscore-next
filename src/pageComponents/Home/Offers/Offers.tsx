import React from 'react';
import styled from 'styled-components';
import { IOffer } from '../../../@types/interfaces';
import { Container, Offers as OffersList } from '../../../components';
import { COLORS, TYPOGRAPHY } from '../../../constants';
import { Title } from '../../../ui';

export const Offers: React.FC = () => {
  const offersArray: IOffer[] = [
    {
      id: 1,
      title: 'Single site license',
      description: 'Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price',
      price: 77,
      points: [
        'Single site license',
        'Special introductory pricing',
        'Unlimited Pages and Keywords',
        'Billed annually',
      ],
    },
    {
      id: 2,
      title: '3 Site license',
      description: 'Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price',
      price: 117,
      points: [
        'All features for 3 sites',
        'Special introductory pricing',
        'Unlimited Pages and Keywords',
        'Billed annually',
      ],
    },
    {
      id: 3,
      title: '10 Site license',
      description: 'Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price',
      price: 167,
      points: [
        'All features for 10 sites',
        'Special introductory pricing',
        'Unlimited Pages and Keywords',
        'Billed annually',
      ],
    },
  ];

  return (
    <StyledOffers>
      <OffersContainer>
        <OffersTitle size='xl'>
          Get started with Gscore today!
        </OffersTitle>
        <OffersList list={offersArray} />
        <Contact>
          <ContactText>Have more than 10 sites?</ContactText>
          <ContactLink href="#">Contact us</ContactLink>
        </Contact>
      </OffersContainer>
    </StyledOffers>
  );
}

const StyledOffers = styled.section`
  background-color: ${COLORS.neutral[800]};
`;

const OffersContainer = styled(Container)`
  padding-top: 32px;
  padding-bottom: 42px;
`;

const OffersTitle = styled(Title)`
  margin: 0 0 48px;
  text-align: center;
`;

const Contact = styled.div`
  margin-top: 33px;
  text-align: center;
  `;

const ContactText = styled.p`
  margin: 0 0 1px;
  ${TYPOGRAPHY.paragraph.default}
  color: ${COLORS.neutral[100]};
`;

const ContactLink = styled.a`
  margin: 0;
  ${TYPOGRAPHY.paragraph.default}
  text-decoration: underline;
  color: ${COLORS.accent.primary[1]};
`;
