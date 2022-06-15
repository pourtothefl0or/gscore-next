import { FC } from 'react';
import styled from 'styled-components';
import { Card } from './components';
import { IOffer } from '../../types/index';

interface Props {
  list: IOffer[];
};

const Offers: FC<Props> = ({ list }) => {
  return (
    <Root>
      {list.map(obj =>
        <Card key={obj.id} {...obj} />
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
  }
`;
