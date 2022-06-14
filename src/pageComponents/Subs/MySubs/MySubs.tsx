import React from 'react';
import styled from 'styled-components';
import { Container, Licenses } from '../../../components';
import { LicensesEmpty } from './components';
import { BREAKPOINTS, COLORS, } from '../../../constants';
import { ISubs, ISubsLicense } from '../../../@types/interfaces';
import { Button, Title } from '../../../ui';

export const MySubs: React.FC = () => {
  const subsArray: ISubs[] = [
    {
      id: 1,
      title: 'Single site license',
      validDate: '21.10.2022',
      price: 77,
      status: 'Active',
    },
    {
      id: 2,
      title: 'Single site license',
      validDate: '21.10.2022',
      price: 77,
      status: 'Hold',
    },
    {
      id: 3,
      title: 'Single site license',
      validDate: '21.10.2022',
      price: 77,
      status: 'Inactive',
    },
  ];

  const subsLicenseArray: ISubsLicense[] = [
    {
      id: 1,
      subsId: 1,
      code: 'https://translate.google.com/?hl=ru&sl=en&tl=ru&text=gscore%20license%20code&op=translate',
      domain: 'https://translate.google.com/?hl=ru&sl=en&tl=ru&text=gscore%20license%20code&op=translate',
      status: 'Active',
    },
    {
      id: 2,
      subsId: 1,
      code: 'https://translate.google.com/?hl=ru&sl=en&tl=ru&text=gscore%20license%20code&op=translate',
      domain: 'https://translate.google.com/?hl=ru&sl=en&tl=ru&text=gscore%20license%20code&op=translate',
      status: 'Hold',
    },
    {
      id: 3,
      subsId: 1,
      code: 'https://translate.google.com/?hl=ru&sl=en&tl=ru&text=gscore%20license%20code&op=translate',
      domain: 'https://translate.google.com/?hl=ru&sl=en&tl=ru&text=gscore%20license%20code&op=translate',
      status: 'Inactive',
    },
    {
      id: 4,
      subsId: 2,
      code: 'https://translate.google.com/?hl=ru&sl=en&tl=ru&text=gscore%20license%20code&op=translate',
      domain: 'https://translate.google.com/?hl=ru&sl=en&tl=ru&text=gscore%20license%20code&op=translate',
      status: 'Hold',
    },
    {
      id: 5,
      subsId: 2,
      code: 'https://translate.google.com/?hl=ru&sl=en&tl=ru&text=gscore%20license%20code&op=translate',
      domain: 'https://translate.google.com/?hl=ru&sl=en&tl=ru&text=gscore%20license%20code&op=translate',
      status: 'Inactive',
    },
    {
      id: 6,
      subsId: 3,
      code: 'https://translate.google.com/?hl=ru&sl=en&tl=ru&text=gscore%20license%20code&op=translate',
      domain: 'https://translate.google.com/?hl=ru&sl=en&tl=ru&text=gscore%20license%20code&op=translate',
      status: 'Inactive',
    },
  ];

  return (
    <StyledMySubs>
      <MySubsContainer>
        <SubsHeader>
          <Title>
            My subscriptions
          </Title>
          {subsArray.length > 0 && <Button>Upgrade</Button>}
        </SubsHeader>
        {subsArray.length <= 0 && <LicensesEmpty />}
        {subsArray.length > 0 &&  <Licenses subs={subsArray} subsLicense={subsLicenseArray} />}
      </MySubsContainer>
    </StyledMySubs>
  );
}

const StyledMySubs = styled.section`
  overflow: hidden;
  background-color: ${COLORS.neutral[800]};
`;

const MySubsContainer = styled(Container)`
  padding-top: 32px;
  padding-bottom: 120px;
`;

const SubsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    margin-bottom: 32px;
  }
`;
