import React from 'react';
import styled from 'styled-components';
import { Card } from './components';
import { IOffer } from '../../@types/interfaces';

interface OffersProps {
  list: IOffer[];
};

export const Offers: React.FC<OffersProps> = ({ list }) => {
  return (
    <StyledOffers>
      {list.map(item =>
        <Card key={item.id} {...item} />
      )}
    </StyledOffers>
  );
};

const StyledOffers = styled.div`
  display: flex;
  justify-content: center;
  gap: 28px;
  flex-wrap: wrap;

  > * {
    max-width: 404px;

    @media (min-width: 1298px) {
      &:not(:nth-child(2)) {
        margin-top: 50px;
      }
    }
  }
`;
