import { Group, Stack, Text, ThemeIcon } from '@mantine/core';
import React from 'react';

import style from './_index.module.scss';

type Props = {
  description: string;
  icon: React.ReactNode;
  title: string;
};

function FeatureCard(props: Props) {
  const { description, icon, title } = props;
  return (
    <div key={title}>
      <ThemeIcon
        size={60}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: '#2F90B0', to: '#2F90B0' }}
        className={style.icon}
      >
        {icon}
      </ThemeIcon>
      <Stack>
        <Group position="apart">
          <Text size="lg" mt="sm" className={style.title}>
            {title}
          </Text>
        </Group>
        <Text color="dimmed" className={style.description}>
          {description}
        </Text>
      </Stack>
    </div>
  );
}

export default FeatureCard;
