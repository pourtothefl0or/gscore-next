import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { CheckCircle } from '../../../../ui/iconComponents';
import { COLORS, TYPOGRAPHY, VARS } from '../../../../constants';
import { IOffer } from '../../../../types/interfaces';

const Card: FC<IOffer> = ({ ...props }) => {
  return (
    <Root>
      <CardTop className='card-top'>
        <Price>${props.price}</Price>
        <Title>{props.title}</Title>
        <Description className='card-top__description'>{props.description}</Description>
      </CardTop>
      <Points>
        {props.points.map(item =>
          <Point key={item}>
            <CheckCircle /> {item}
          </Point>
        )}
      </Points>
      <Link href="/login">
        <CardLink className='card-button'>Get Gscore</CardLink>
      </Link>
    </Root>
  );
};

export default Card;

const Root = styled.article`
  border-radius: ${VARS.radius[1]};
  padding: 42px 48px;
  height: 100%;
  background-color: ${COLORS.neutral[700]};

  /* favorite card */
  &:nth-child(2) {
    background-color: ${COLORS.accent.primary[1]};

    .card-top {
      border-bottom-color: ${COLORS.neutral[100]};

      &__description {
        color: ${COLORS.neutral[100]};
      }
    }

    .card-button {
      color: ${COLORS.accent.primary[1]};
    }
  }
`;

const CardTop = styled.div`
  margin-bottom: 38px;
  border-bottom: 1px solid ${COLORS.neutral[500]};
  padding-bottom: 40px;
  text-align: center;
`;

const Price = styled.p`
  margin: 0 0 4px;
  font-family: 'DM Sans';
  ${TYPOGRAPHY.headings[1]}
  color: ${COLORS.neutral[100]};
`;

const Title = styled.h2`
  margin: 0 0 8px;
  ${TYPOGRAPHY.textSingle[400]}
  color: ${COLORS.neutral[100]};
`;

const Description = styled.p`
  margin: 0;
  ${TYPOGRAPHY.paragraph.default}
  color: ${COLORS.neutral[400]};
`;

const Points = styled.ul`
  margin-bottom: 32px;
`;

const Point = styled.li`
  position: relative;
  padding: 3px 0 3px 40px;
  ${TYPOGRAPHY.textSingle[200].regular}
  color: ${COLORS.neutral[100]};

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

const CardLink = styled.a`
  display: block;
  border-radius: ${VARS.radius[2]};
  padding: 26px;
  ${TYPOGRAPHY.textSingle[200].bold}
  text-align: center;
  color: ${COLORS.neutral[700]};
  background-color: ${COLORS.neutral[100]};
`;
