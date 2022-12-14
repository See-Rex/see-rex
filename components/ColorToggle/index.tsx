import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";
import React from "react";

function ColorToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" my="xl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
            colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          color:
            colorScheme === "dark"
              ? theme.colors.yellow[4]
              : theme.colors.blue[6],
        })}
      >
        {colorScheme === "dark" ? (
          <IconSun size={18} />
        ) : (
          <IconMoonStars size={18} />
        )}
      </ActionIcon>
    </Group>
  );
}

export default ColorToggle;
