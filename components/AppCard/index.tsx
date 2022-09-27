import {
  ActionIcon,
  Badge,
  Button,
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
        color={colorScheme === "dark" ? "dark" : "gray"}
        key={values[0]}
        leftSection={<IconUsers />}
      >
        {values[0]}
      </Badge>
      <Badge
        color={colorScheme === "dark" ? "dark" : "gray"}
        key={values[1]}
        leftSection={<IconRulerMeasure />}
      >
        {values[1]}
      </Badge>
      <Badge
        color={colorScheme === "dark" ? "dark" : "gray"}
        key={values[2]}
        leftSection={<IconCar />}
      >
        {values[2]}
      </Badge>
      <Badge
        color={colorScheme === "dark" ? "dark" : "gray"}
        key={values[3]}
        leftSection={<IconHomeDollar />}
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
          <Text size="lg" weight={500}>
            {title}
          </Text>
          <Badge size="sm">{type}</Badge>
        </Group>
        <Text size="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={style.section}>
        <Text mt="md" className={style.label} color="dimmed">
          Summary
        </Text>
        <Group spacing={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconEdit size={18} className={style.edit} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}

export default AppCard;
