import { Center, Group, Image, Paper } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import React, { useState } from 'react';
import {
  AppCard,
  BasicFooter,
  BasicHeader,
  CollapsedBar,
  FeatureCard,
  FeatureHero,
  GoogleButton,
  GroupCard,
  IconButton,
  InputField,
  LandingBanner,
  MainFooter,
  ProgressCard,
  StatisticCard,
  StyledButton,
} from '../../components';
import PropertyType from '../../enums/PropertyType.enum';
import { IconHolidayVillage } from '../../public/Icons';
import StoryLayout from './../../layouts/StoryLayout';

function StoryPage() {
  const [opened, setOpened] = useState(false);
  const [activePage, setActivePage] = useState(1);

  const handlePage = (page: number) => {
    setActivePage(page);
  };

  const data = [
    {
      description: '24% more than in the same month last year, 33% more that two years ago',
      stats: '456,133',
      title: 'Page views',
    },
    {
      description: '13% less compared to last month, new user engagement up by 6%',
      stats: '2,175',
      title: 'New users',
    },
    {
      description: '1994 orders were completed this month, 97% satisfaction rate',
      stats: '1,994',
      title: 'Completed orders',
    },
  ];

  const PageContent = () => {
    switch (activePage) {
      case 1:
        return (
          <AppCard
            image={<Image src={'../background2.png'} alt={'homePic'} height={180} />}
            title={'Home Property #1'}
            type={PropertyType.RESIDENTIAL}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
            values={{
              amount: '400',
              area: '300',
              car: '200',
              people: '100',
            }}
          />
        );
      case 2:
        return (
          <>
            <BasicFooter height={56} />
            <h1>See Footer Below</h1>
          </>
        );
      case 3:
        return (
          <>
            <BasicHeader opened={opened} onClick={() => setOpened(!opened)} burger />
            <h1>See The Header Above</h1>
          </>
        );
      case 4:
        return (
          <>
            <CollapsedBar hidden={!opened} page={activePage} setPage={handlePage} setOpened={setOpened} />
            <h1>See The Collapsable Bar Beside</h1>
          </>
        );
      case 5:
        return (
          <Paper style={{ background: '#b1b1b1b7', maxWidth: 350 }} p="md">
            <FeatureCard
              description="Access all your property’s information within a single website. Search through hundreds of data. Filter just what you need. "
              icon={<IconSearch />}
              title="Centralized Database"
            />
          </Paper>
        );
      case 6:
        return <FeatureHero />;
      case 7:
        return <GoogleButton>Sign in with Google</GoogleButton>;
      case 8:
        return <GroupCard data={data} />;
      case 9:
        return (
          <Group position="apart">
            <>
              <IconButton className="link" icon={<IconHolidayVillage />} label={'Link Inactive'} isFullWidth />
            </>
            <>
              <IconButton className="active" icon={<IconHolidayVillage />} label={'Link Active'} isFullWidth />
            </>
          </Group>
        );
      case 10:
        return (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <InputField label={'Email'} placeholder={'lezzml.now@gmail.com'} />
            <InputField label={'Password'} placeholder={'Your password'} type="password" />
          </div>
        );
      case 11:
        return (
          <div style={{ width: '100%' }}>
            <LandingBanner />
          </div>
        );
      case 12:
        return <MainFooter height={56} />;
      case 13:
        return <ProgressCard label="Test" stats="3,450" progress={3450} color="#35C0ED" icon="up" />;
      case 14:
        return <StatisticCard amount={100} category="Testing" description="This how your statistics are shown" />;
      case 15:
        return (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              minWidth: '50%',
              rowGap: 20,
            }}
          >
            <StyledButton types="sign-in">Sign-in</StyledButton>
            <StyledButton types="register">Register</StyledButton>
            <StyledButton types="navigation">Navigation</StyledButton>
            <StyledButton types="sign-up">Sign-up</StyledButton>
            <StyledButton types="banner">Banner</StyledButton>
            <StyledButton types="card">Card</StyledButton>
            <StyledButton types="active">Active</StyledButton>
          </div>
        );
      default:
        return <h1>Error 404: Component not found</h1>;
    }
  };

  return (
    <StoryLayout
      opened={opened}
      onClick={() => setOpened((o) => !o)}
      activePage={activePage}
      paginator={handlePage}
      setOpened={setOpened}
    >
      <Center style={{ height: '100%', width: '100%' }}>
        <PageContent />
      </Center>
    </StoryLayout>
  );
}

export default StoryPage;
