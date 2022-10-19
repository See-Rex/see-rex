/* eslint-disable @next/next/no-img-element */
import { Carousel } from '@mantine/carousel';
import {
  AppShell,
  BackgroundImage,
  Button,
  Container,
  Group,
  MediaQuery,
  SimpleGrid,
  Stack,
  useMantineColorScheme,
} from '@mantine/core';
import { IconAnalyze, IconCheck, IconMail, IconSearch } from '@tabler/icons';
import Autoplay from 'embla-carousel-autoplay';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { AppCard, ContactUsForm, FeatureCard, MainFooter, MainHeader, StyledButton } from '../../components';
import PropertyType from '../../enums/PropertyType.enum';
import BgAnimated from '../../public/BgAnimated.svg';
import style from './_index.module.scss';

function LandingLayout() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const { colorScheme } = useMantineColorScheme();
  const [opened, setOpened] = useState(false);
  const wheelGestures = useRef(WheelGesturesPlugin({ forceWheelAxis: 'y' }));

  return (
    <AppShell
      className={`${style[colorScheme]}`}
      header={<MainHeader opened={opened} onClick={() => setOpened(!opened)} burger />}
      padding={0}
      fixed
    >
      <Carousel
        align="start"
        classNames={{ indicator: style[`indicator-${colorScheme}`] }}
        containScroll="keepSnaps"
        height="calc(100vh - 80px)"
        orientation="vertical"
        plugins={[wheelGestures.current]}
        speed={4}
        withControls={false}
        includeGapInSize
        withIndicators
      >
        <Carousel.Slide>
          <Group className={`${style.page1} ${style[colorScheme]}`} spacing={120} position="center">
            <Stack spacing={50}>
              <h1>Monitor your properties.</h1>
              <h2>Anytime. Anywhere</h2>
            </Stack>
            <Link href="/auth/register">
              <Button type="button" size="lg" radius={10} className={style.button}>
                Get Started
              </Button>
            </Link>
            <div className={style.backdrop}>
              <BgAnimated minWidth="100vw" />
            </div>
          </Group>
        </Carousel.Slide>
        <Carousel.Slide>
          <Group className={`${style.page2} ${style[colorScheme]}`}>
            <SimpleGrid
              cols={2}
              breakpoints={[
                { cols: 1, maxWidth: 'sm' },
                { cols: 2, maxWidth: 'md', spacing: 60 },
              ]}
              spacing={120}
              className={style.grid}
            >
              <MediaQuery smallerThan="sm" styles={{ display: 'none !important' }}>
                <Group style={{ maxWidth: 400, minWidth: 250 }}>
                  <AppCard
                    image={<img src="/background2.png" alt="Image Background" />}
                    title="SeeRex Inc."
                    description="Your edge in real estate"
                    type={'Non - Residential' as PropertyType}
                    values={{
                      amount: '',
                      area: '',
                      car: '',
                      people: '',
                    }}
                  />
                </Group>
              </MediaQuery>
              <Group style={{ maxWidth: 600, minWidth: 300 }}>
                <Carousel
                  classNames={{
                    indicator: style.carouselIndicator,
                    indicators: style.carouselIndicators,
                    viewport: style.carousel,
                  }}
                  plugins={[autoplay.current]}
                  onMouseEnter={autoplay.current.stop}
                  onMouseLeave={autoplay.current.reset}
                  height="100%"
                  draggable={false}
                  slideGap="xl"
                  speed={5}
                  loop
                  withIndicators
                  withControls={false}
                >
                  <Carousel.Slide>
                    <FeatureCard
                      description="Access all your property’s information within a single website. Search through hundreds of data. Filter just what you need. "
                      icon={<IconSearch />}
                      title="Centralized Database"
                    />
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <FeatureCard
                      description="Send and Receive emails and concerns directly from and to your land and property owners contact. "
                      icon={<IconMail />}
                      title="Email Integration"
                    />
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <FeatureCard
                      description="Generate trends and statistics of your real estate. Know how your bussiness is doing. "
                      icon={<IconAnalyze />}
                      title="Smart Statistics"
                    />
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <FeatureCard
                      description="Access all your property’s information within a single website. Search through hundreds of data. Filter just what you need. "
                      icon={<IconSearch />}
                      title="Centralized Database"
                    />
                  </Carousel.Slide>
                </Carousel>
              </Group>
            </SimpleGrid>
          </Group>
        </Carousel.Slide>
        <Carousel.Slide>
          <SimpleGrid cols={2} className={style.page3}>
            <Group p={50} style={{ maxWidth: 600, minWidth: '60%' }}>
              <h1 className={`${style.title} ${style[colorScheme]}`}>Great way to monitor your properties</h1>
              <Group spacing={30} noWrap>
                <div className={style.icon}>
                  <IconCheck color="#fff" type="filled" />
                </div>
                <h2 className={`${style.subtitle} ${style[colorScheme]}`}>
                  Access all your property’s information within a single website.
                </h2>
              </Group>
              <Group spacing={30} noWrap>
                <div className={style.icon}>
                  <IconCheck color="#fff" type="filled" />
                </div>
                <h2 className={`${style.subtitle} ${style[colorScheme]}`}>
                  Send emails and concerns directly to your land and property owners contact.
                </h2>
              </Group>
              <Group spacing={30} noWrap>
                <div className={style.icon}>
                  <IconCheck color="#fff" type="filled" />
                </div>
                <h2 className={`${style.subtitle} ${style[colorScheme]}`}>
                  Generate trends and statistics of your real estate.
                </h2>
              </Group>
              <Group spacing={30} noWrap>
                <div className={style.icon}>
                  <IconCheck color="#fff" type="filled" />
                </div>
                <h2 className={`${style.subtitle} ${style[colorScheme]}`}>
                  Collate, Edit, and Organize your Real Estate Data.
                </h2>
              </Group>
            </Group>
            <MediaQuery smallerThan="xs" styles={{ display: 'none !important' }}>
              <BackgroundImage component={Group} style={{ minWidth: 300 }} src="/page3bg.jpg" />
            </MediaQuery>
          </SimpleGrid>
        </Carousel.Slide>
        <Carousel.Slide>
          <Container className={`${style.lastPage} ${style[colorScheme]}`}>
            <BackgroundImage component={Group} src="/last-bg.png" className={style.footCard}>
              <Stack spacing={100} p={50}>
                <h1 className={`${style.head} ${style[colorScheme]}`}>Let’s manage & oversee efficiently</h1>
                <SimpleGrid cols={2}>
                  <Group>
                    <h3 className={`${style.caption} ${style[colorScheme]}`}>info@seerex.ph +63 998 456 8572</h3>
                  </Group>
                  <Group position="right">
                    <Link href="/auth/register">
                      <StyledButton types="landing2">Sign-up</StyledButton>
                    </Link>
                  </Group>
                </SimpleGrid>
              </Stack>
            </BackgroundImage>
          </Container>
        </Carousel.Slide>
        <MainFooter height={100} />
      </Carousel>
      <ContactUsForm opened={opened} onClose={() => setOpened(false)} />
    </AppShell>
  );
}

export default LandingLayout;
