import { AppShell, Stack, useMantineColorScheme } from '@mantine/core';
import React, { useState } from 'react';
import { ContactUsForm, LandingHeader, MainFooter } from '../../components';
import style from './_index.module.scss';

function LandingLayout() {
  const [opened, setOpened] = useState(false);
  const { colorScheme } = useMantineColorScheme();

  return (
    <AppShell
      className={style[colorScheme]}
      header={<LandingHeader opened={opened} onClick={() => setOpened(!opened)} burger />}
      footer={<MainFooter height={56} />}
      padding={0}
    >
      <Stack align="center">
        <ContactUsForm opened={opened} onClose={() => setOpened(false)} />
      </Stack>
    </AppShell>
  );
}

export default LandingLayout;
