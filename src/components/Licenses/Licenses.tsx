import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import { ISubs, ISubsLicense } from '../../@types/interfaces';
import { Card, Code } from './components';
import styled from 'styled-components';
import { BREAKPOINTS, COLORS, TYPOGRAPHY, VARS } from '../../constants';
import { ArrowLeft, ArrowRight } from '../../assets/icons';

interface LicensesProps {
  subs: ISubs[];
  subsLicense: ISubsLicense[];
};

export const Licenses: React.FC<LicensesProps> = ({ subs, subsLicense }) => {
  const [licenseId, setLicenseId] = useState<number>(subs[0].id);

  return (
    <>
      <LicensesSlider>
        <Slider
          modules={[Navigation, Pagination]}
          spaceBetween={28}
          slidesPerView={1}
          slideToClickedSlide={true}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
          pagination={{
            type: 'fraction',
            el: '.counter-pagination',
            renderBullet: index => `<span>${[index]}</span>`
          }}
        >
          {subs.map(el =>
            <SwiperSlide key={el.id}>
              <Card {...el} onClick={(id: number) => setLicenseId(id)}/>
            </SwiperSlide>
          )}
        </Slider>
        {subs.length > 0 &&
          <Counter>
            <CounterButton className='prev'><ArrowLeft /></CounterButton>
            <CounterList className='counter-pagination' />
            <CounterButton className='next'><ArrowRight /></CounterButton>
          </Counter>
        }
      </LicensesSlider>

      <LicensesCodeList>
        {subsLicense
          .filter(el => el.subsId === licenseId)
          .map(el =>
            <li key={el.id}>
              <Code {...el} />
            </li>
        )}
      </LicensesCodeList>
    </>
  );
};

const LicensesSlider = styled.div`
  margin-bottom: 32px;
`;

const Slider = styled(Swiper)`
  overflow: unset;
  margin: 0 auto 24px 0;
  max-width: 620px;

  .swiper-slide {
    opacity: 0.6;

    &-active {
      opacity: 1;
    }
  }

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    max-width: 420px;
  }
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    justify-content: center;
  }
`;

const CounterButton = styled.button`
  --size: 44px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid currentColor;
  border-radius: ${VARS.radius[1]};
  width: var(--size);
  height: var(--size);
  color: ${COLORS.neutral[100]};

  &.swiper-button-disabled {
    color: ${COLORS.neutral[600]};
    cursor: not-allowed;
  }

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    &.prev,
    &.next {
      display: none;
    }
  }
`;

const CounterList = styled.div`
  ${TYPOGRAPHY.headings[4]}
  color: ${COLORS.neutral[600]};

  .swiper-pagination-current {
    color: ${COLORS.neutral[100]};
  }
`;

const LicensesCodeList = styled.ul`
  li:not(:last-child) {
    margin-bottom: 32px;
  }
`;
