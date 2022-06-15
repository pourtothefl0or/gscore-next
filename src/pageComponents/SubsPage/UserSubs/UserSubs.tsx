import { FC } from 'react';
import styled from 'styled-components';
import { Container, Licenses } from '../../../components';
import { LicensesEmpty } from './components';
import { BREAKPOINTS, COLORS, } from '../../../constants';
import { ISubs, ISubsLicense } from '../../../types/index';
import { ButtonLink, Title } from '../../../ui/components';
import Link from 'next/link';

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

const UserSubs: FC = () => {
  return (
    <Root>
      <SubsContainer>
        <Header>
          <Title>My subscriptions</Title>
          {subsArray.length > 0 &&
            <Link href="/">
              <ButtonLink>Upgrade</ButtonLink>
            </Link>
          }
        </Header>
        {!subsArray.length && <LicensesEmpty />}
        {subsArray.length > 0 && <Licenses subs={subsArray} subsLicense={subsLicenseArray} />}
      </SubsContainer>
    </Root>
  );
};

export default UserSubs;

const Root = styled.section`
  overflow: hidden;
  background-color: ${COLORS.neutral[800]};
`;

const SubsContainer = styled(Container)`
  padding-top: 32px;
  padding-bottom: 120px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;

  @media (max-width: ${BREAKPOINTS.tablet.max}) {
    margin-bottom: 32px;
  }
`;
