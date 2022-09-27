import { Center, Group, Paper, RingProgress } from "@mantine/core";
import { IconArrowDownRight, IconArrowUpRight } from "@tabler/icons";
import React from "react";

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
  return (
    <Paper withBorder radius="md" p="xs" key={stat.label}>
      <Group>
        <RingProgress
          size={80}
          roundCaps
          thickness={8}
          sections={[{ value: stat.progress, color: stat.color }]}
          label={
            <Center>
              <Icon size={22} stroke={1.5} />
            </Center>
          }
        />

        <div>
          <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
            {stat.label}
          </Text>
          <Text weight={700} size="xl">
            {stat.stats}
          </Text>
        </div>
      </Group>
    </Paper>
  );
}

export default ProgressCard;
