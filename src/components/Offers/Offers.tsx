import { FC } from 'react';
import styled from 'styled-components';
import { Card } from './components';
import { IOffer } from '../../types/interfaces';

interface Props {
  list: IOffer[];
};

const Offers: FC<Props> = ({ list }) => {
  return (
    <Root>
      {list.map(item =>
        <Card key={item.id} {...item} />
      )}
    </Root>
  );
};

export default Offers;

const Root = styled.div`
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
