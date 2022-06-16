import { FC } from 'react';
import styled from 'styled-components';
import { IOffer } from '../../../types/index';
import { Container, OffersList } from '../../../components';
import { COLORS, TYPOGRAPHY, VARS } from '../../../constants';
import { Title } from '../../../ui/components';

const offersArray: IOffer[] = [
  {
    id: 1,
    sitesCount: 1,
    name: 'One cite',
    prices: [
      {
        id: 1,
        isActive: true,
        productId: 1,
        price: '52'
      },
    ],
  },
  {
    id: 2,
    sitesCount: 3,
    name: 'Three cites',
    prices: [
      {
        id: 2,
        isActive: true,
        productId: 2,
        price: '17'
      },
    ],
  },
  {
    id: 3,
    sitesCount: 7,
    name: 'Seven sites',
    prices: [
      {
        id: 3,
        isActive: true,
        productId: 3,
        price: '58'
      },
    ],
  },
];

export const Offers: FC = () => {
  return (
    <Root>
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
    </Root>
  );
}

const Root = styled.section`
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
  transition: color ${VARS.animation};

  &:hover {
    color: ${COLORS.system.red[400]};
  }
`;
