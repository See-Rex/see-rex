import { Center, Group, Paper, RingProgress, Text } from "@mantine/core";
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
  const { label, stats, progress, color, icon } = props;
  const Icon = icons[icon];
  return (
    <Paper withBorder radius="md" p="xs" key={label}>
      <Group>
        <RingProgress
          size={110}
          roundCaps
          thickness={3}
          sections={[{ value: progress, color: color }]}
          label={
            <Center>
              <Icon size={22} stroke={1.5} />
            </Center>
          }
        />
        <div>
          <Text className={style.category} transform="uppercase">
            {label}
          </Text>
          <Text className={style.amount}>{stats}</Text>
        </div>
      </Group>
    </Paper>
  );
}

export default ProgressCard;
