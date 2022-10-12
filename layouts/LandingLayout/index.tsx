import { AppShell, Stack } from '@mantine/core';
import React, { useState } from 'react';
import { BasicHeader, FeatureHero, LandingBanner, MainFooter, StyledButton } from '../../components';
import ContactUsForm from './../../components/ContactUsForm/index';

function LandingLayout() {
  const [opened, setOpened] = useState(false);
  const header = (
    <BasicHeader burger opened={false}>
      <StyledButton types="navigation" onClick={() => setOpened(true)}>
        Contact Us
      </StyledButton>
      <StyledButton types="navigation">Features</StyledButton>
      <StyledButton types="navigation">About us</StyledButton>
    </BasicHeader>
  );
  return (
    <AppShell header={header} footer={<MainFooter height={56} />} padding={0}>
      <Stack>
        <ContactUsForm opened={opened} onClose={() => setOpened(false)} />
        <LandingBanner />
        <FeatureHero />
      </Stack>
    </AppShell>
  );
}

export default LandingLayout;
