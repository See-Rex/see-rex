import { AppShell } from '@mantine/core';
import React from 'react';
import { BasicHeader, LandingBanner, MainFooter, StyledButton } from '../../components';

function LandingLayout() {
  const header = (
    <BasicHeader burger opened={false}>
      <StyledButton types="navigation">Contact Us</StyledButton>
      <StyledButton types="navigation">Features</StyledButton>
      <StyledButton types="navigation">About us</StyledButton>
    </BasicHeader>
  );
  return (
    <AppShell header={header} footer={<MainFooter height={56} />} padding={0}>
      <LandingBanner />
    </AppShell>
  );
}

export default LandingLayout;
