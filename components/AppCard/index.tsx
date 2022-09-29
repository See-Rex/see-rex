import {
  ActionIcon,
  Badge,
  Card,
  Group,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconCar,
  IconEdit,
  IconHomeDollar,
  IconRulerMeasure,
  IconUsers,
} from "@tabler/icons";
import React from "react";
import { StyledButton } from "..";

import style from "./_index.module.scss";

type BadgeCardProps = {
  image: React.ReactNode;
  title: string;
  type: string;
  description: string;
  values: [string, string, string, string];
};

function AppCard(props: BadgeCardProps) {
  const { colorScheme } = useMantineColorScheme();
  const { image, title, type, description, values } = props;

  const features = (
    <>
      <Badge
        className={`${style.badge} ${style[colorScheme]}`}
        leftSection={
          <IconUsers
            stroke={2}
            className={`${style.icon} ${style[colorScheme]}`}
          />
        }
      >
        {values[0]}
      </Badge>
      <Badge
        className={`${style.badge} ${style[colorScheme]}`}
        leftSection={
          <IconRulerMeasure
            stroke={2}
            className={`${style.icon} ${style[colorScheme]}`}
          />
        }
      >
        {values[1]}
      </Badge>
      <Badge
        className={`${style.badge} ${style[colorScheme]}`}
        leftSection={
          <IconCar
            stroke={2}
            className={`${style.icon} ${style[colorScheme]}`}
          />
        }
      >
        {values[2]}
      </Badge>
      <Badge
        className={`${style.badge} ${style[colorScheme]}`}
        leftSection={
          <IconHomeDollar
            stroke={2}
            className={`${style.icon} ${style[colorScheme]}`}
          />
        }
      >
        {values[3]}
      </Badge>
    </>
  );

  return (
    <Card
      withBorder
      radius="md"
      p="md"
      className={`${style.card} ${style[colorScheme]}`}
    >
      <Card.Section>{image}</Card.Section>
      <Card.Section className={style.section} mt="md">
        <Group position="apart">
          <Text className={`${style.title} ${style[colorScheme]}`}>
            {title}
          </Text>
          <Badge className={`${style.type} ${style[colorScheme]}`}>
            {type}
          </Badge>
        </Group>
        <Text mt="xs" className={`${style.description} ${style[colorScheme]}`}>
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={style.section}>
        <Text mb="md" className={`${style.label} ${style[colorScheme]}`}>
          Summary
        </Text>
        <Group spacing={15} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <StyledButton radius="md" types="card">
          Show details
        </StyledButton>
        <ActionIcon className={style.edit} radius="md" size={36}>
          <IconEdit size={18} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}

export default AppCard;
