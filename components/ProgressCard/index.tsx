import {
  Center,
  Group,
  Paper,
  RingProgress,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { IconArrowDownRight, IconArrowUpRight } from "@tabler/icons";
import React from "react";

import style from "./_index.module.scss";
interface Props {
  label: string;
  stats: string;
  progress: number;
  color: string;
  icon: "up" | "down";
}

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};

function ProgressCard(props: Props) {
  const { colorScheme } = useMantineColorScheme();
  const { label, stats, progress, color, icon } = props;
  const Icon = icons[icon];
  const colorRing = colorScheme === "light" ? color : "white";
  return (
    <Paper
      withBorder={colorScheme == "light"}
      radius="md"
      py="xs"
      px="xl"
      key={label}
      className={style[colorScheme]}
    >
      <Group>
        <RingProgress
          size={110}
          roundCaps
          thickness={3}
          sections={[{ value: progress, color: colorRing }]}
          label={
            <Center>
              <Icon size={25} stroke={2} className={style[colorScheme]} />
            </Center>
          }
          mr={20}
        />
        <div>
          <Text
            className={`${style.category} ${style[colorScheme]}`}
            transform="uppercase"
          >
            {label}
          </Text>
          <Text className={`${style.amount} ${style[colorScheme]}`}>
            {stats}
          </Text>
        </div>
      </Group>
    </Paper>
  );
}

export default ProgressCard;
