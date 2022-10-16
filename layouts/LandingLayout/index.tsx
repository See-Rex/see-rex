import { Carousel } from '@mantine/carousel';
import { AppShell, Button, Group, Stack, useMantineColorScheme } from '@mantine/core';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { ContactUsForm, MainHeader, SeeRexLoader } from '../../components';
import BgAnimated from '../../public/BgAnimated.svg';
import style from './_index.module.scss';

function LandingLayout() {
  const [opened, setOpened] = useState(false);
  const { colorScheme } = useMantineColorScheme();
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
        containScroll="trimSnaps"
        height="calc(100vh - 80px)"
        orientation="vertical"
        plugins={[wheelGestures.current]}
        speed={4}
        withControls={false}
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
          <Group className={`${style.page1} ${style[colorScheme]}`} spacing={120} position="center">
            <SeeRexLoader opacity={0.5} />
          </Group>
        </Carousel.Slide>
      </Carousel>

      <ContactUsForm opened={opened} onClose={() => setOpened(false)} />
    </AppShell>
  );
}

export default LandingLayout;
