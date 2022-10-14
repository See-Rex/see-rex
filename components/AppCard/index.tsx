import { StyledButton } from '..';
import { ActionIcon, Badge, Card, Group, SimpleGrid, Text, useMantineColorScheme } from '@mantine/core';
import { IconCar, IconEdit, IconHomeDollar, IconRulerMeasure, IconUsers } from '@tabler/icons';
import React from 'react';

import PropertyType from '../../enums/PropertyType.enum';
import style from './_index.module.scss';

export type ValueType = {
  area: string;
  car: string;
  people: string;
  amount: string;
};

type BadgeCardProps = {
  image: React.ReactNode;
  title: string;
  type?: PropertyType;
  description: string;
  values: ValueType;
};

function AppCard(props: BadgeCardProps) {
  const { colorScheme } = useMantineColorScheme();
  const { description, image, title, type, values } = props;

  const features = (
    <>
      <Badge
        className={`${style.badge} ${style[colorScheme]}`}
        leftSection={<IconUsers stroke={2} className={`${style.icon} ${style[colorScheme]}`} />}
      >
        {values.people}
      </Badge>
      <Badge
        className={`${style.badge} ${style[colorScheme]}`}
        leftSection={<IconRulerMeasure stroke={2} className={`${style.icon} ${style[colorScheme]}`} />}
      >
        {values.area}
      </Badge>
      <Badge
        className={`${style.badge} ${style[colorScheme]}`}
        leftSection={<IconCar stroke={2} className={`${style.icon} ${style[colorScheme]}`} />}
      >
        {values.car}
      </Badge>
      <Badge
        className={`${style.badge} ${style[colorScheme]}`}
        leftSection={<IconHomeDollar stroke={2} className={`${style.icon} ${style[colorScheme]}`} />}
      >
        {values.amount}
      </Badge>
    </>
  );

  return (
    <Card withBorder radius="md" p="md" className={`${style.card} ${style[colorScheme]}`}>
      <Card.Section className={`${style.image} ${style[colorScheme]}`}>{image}</Card.Section>
      <Card.Section className={style.section} mt="md">
        <Group position="apart">
          <Text className={`${style.title} ${style[colorScheme]}`}>{title}</Text>
          <Badge className={`${style.type} ${style[colorScheme]}`}>{type}</Badge>
        </Group>
        <Text mt="xs" className={`${style.description} ${style[colorScheme]}`}>
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={style.section}>
        <Text mb="md" className={`${style.label} ${style[colorScheme]}`}>
          Summary
        </Text>
        <SimpleGrid cols={4} spacing="xs" mt={5}>
          {features}
        </SimpleGrid>
      </Card.Section>

      <Group mt="xs">
        <StyledButton types="card">Show details</StyledButton>
        <ActionIcon className={`${style.edit} ${style[colorScheme]}`} radius="md" size={36}>
          <IconEdit size={18} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}

export default AppCard;
