import React from 'react'
import { Title, Text, Container, Button, Overlay, createStyles } from '@mantine/core';
import style from "./_index.module.scss"

function LandingBanner() {

  return (
    <div className={style.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={-1} />

      <div className={style.inner}>
        <Title className={style.title}>
          Manage your real estate.{' '}
          <Text component="span" inherit className={style.highlight}>
            Anytime. Anywhere.
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={style.description}>
            Explore ways to monitor your properties. Keep in touch with both land and home owners. Create a centralized information database. Integrate data analytics to get better insight of your business.
          </Text>
        </Container>

        <div className={style.controls}>
          <Button className={style.control} variant="white" size="lg">
            Get started
          </Button>
          <Button className={style.secondaryControl} size="lg">
            Sign-in
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LandingBanner