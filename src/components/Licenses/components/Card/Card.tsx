import { FC } from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, COLORS, TYPOGRAPHY, VARS } from '../../../../constants';
import { ISubs } from '../../../../types/interfaces';
import { Button, Status } from '../../../../ui/components';

interface Props extends ISubs {
  onClick: (id: number) => void;
};

const Card: FC<Props> = ({ onClick, ...props }) => {
  return (
    <Root>
      <Header>
        <Name>Gscore</Name>
        <Status status={props.status} />
      </Header>
      <Body>
        <License>
          <Title>{props.title}</Title>
          <Price>${props.price}</Price>
          <Date>valid until {props.validDate}</Date>
        </License>
        <Button theme='secondary' onClick={() => onClick(props.id)}>View</Button>
      </Body>
    </Root>
  );
};

export default Card;

const Root = styled.div`
  border-radius: ${VARS.radius[1]};
  padding: 16px 0;
  background-color: ${COLORS.neutral[600]};

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    padding: 8px 0;
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: auto 100px;
  border-bottom: 1px solid ${COLORS.neutral[500]};
  padding: 32px;

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    padding: 24px 16px;
  }
`;

const Name = styled.p`
  margin: 0;
  ${TYPOGRAPHY.headings[4]}
  color: ${COLORS.neutral[100]};
`;

const License = styled.div`
  display: grid;
  grid-template-columns: auto 100px;
  grid-template-areas:
    "title price"
    "date .";
  row-gap: 12px;
  margin-bottom: 32px;

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    margin-bottom: 24px;
  }
`;

const Body = styled.div`
  padding: 32px;

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    padding: 24px 16px;
  }
`;

const Title = styled.h2`
  grid-area: title;
  margin: 0;
  ${TYPOGRAPHY.textSingle[400].regular};
  color: ${COLORS.neutral[100]};

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    ${TYPOGRAPHY.paragraph.default}
  }
`;

const Price = styled.p`
  grid-area: price;
  margin: 0;
  ${TYPOGRAPHY.textSingle[400].regular};
  color: ${COLORS.neutral[100]};

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    ${TYPOGRAPHY.paragraph.default}
  }
`;

const Date = styled.p`
  grid-area: date;
  margin: 0;
  ${TYPOGRAPHY.textSingle[100].regular}
  color: ${COLORS.neutral[500]};

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    ${TYPOGRAPHY.paragraph.default}
  }
`;
