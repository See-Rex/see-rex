import { ColorToggle, SegmentedToggle, StyledButton } from '..';
import {
  Burger,
  BurgerProps,
  Container,
  Group,
  Header,
  MediaQuery,
  Paper,
  SimpleGrid,
  Transition,
  useMantineColorScheme,
} from '@mantine/core';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import Logo from '../../public/Logo';
import style from './_index.module.scss';

type Props = {
  burger?: boolean;
};

function LandingHeader(props: BurgerProps & Props) {
  const { colorScheme } = useMantineColorScheme();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 0, 1]);
  const { burger, onClick } = props;
  const [collapse, setCollapse] = useState(false);

  return (
    <Header height={80} mb={50} className={style.header}>
      <Container fluid px="lg">
        <div className={style.inner}>
          <Logo size="lg" />
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              color={colorScheme == 'light' ? 'black' : 'white'}
              hidden={!burger}
              opened={collapse}
              onClick={() => setCollapse(!collapse)}
              size="sm"
            />
          </MediaQuery>
          <Transition transition="slide-down" duration={200} mounted={collapse} onExit={() => setCollapse(false)}>
            {(styles) => (
              <Paper className={`${style.dropdown} ${style[colorScheme]}`} withBorder style={styles}>
                <Link href="/auth/login">
                  <StyledButton types="navigation" fullWidth>
                    <h1>Sign In</h1>
                  </StyledButton>
                </Link>
                <StyledButton types="navigation" onClick={onClick} fullWidth>
                  <h1>Contact Us</h1>
                </StyledButton>
                <SimpleGrid cols={1} px={20}>
                  <SegmentedToggle />
                </SimpleGrid>
              </Paper>
            )}
          </Transition>
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Group spacing={20} className={style.links}>
              <ColorToggle />
              <Link href="/auth/login">
                <StyledButton types="landing">
                  <h1>Sign In</h1>
                </StyledButton>
              </Link>
              <StyledButton types="landing2" onClick={onClick}>
                <h1>Contact Us</h1>
              </StyledButton>
            </Group>
          </MediaQuery>
        </div>
        <motion.div className={`${style.backdrop} ${style[colorScheme]}`} style={{ opacity: scale }} />
      </Container>
    </Header>
  );
}

export default LandingHeader;
