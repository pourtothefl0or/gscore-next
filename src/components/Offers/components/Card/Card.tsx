import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { CheckCircle } from '../../../../ui/iconComponents';
import { COLORS, TYPOGRAPHY, VARS } from '../../../../constants';
import { IOffer } from '../../../../types/index';

const Card: FC<IOffer> = ({ price, title, description, points }) => {
  return (
    <Root>
      <CardTop>
        <Price>${price}</Price>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardTop>
      <Points>
        {points.map(el =>
          <Point key={el}>
            <CheckCircle /> {el}
          </Point>
        )}
      </Points>
      <Link href="/login">
        <CardLink>Get Gscore</CardLink>
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
