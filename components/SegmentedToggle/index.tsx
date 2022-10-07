import {
  Box,
  Center,
  Group,
  MediaQuery,
  SegmentedControl,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons";

export function SegmentedToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <MediaQuery largerThan="sm" styles={{ display: "none" }}>
      <Group position="center" my="xl" grow>
        <SegmentedControl
          value={colorScheme}
          onChange={(value: "light" | "dark") => toggleColorScheme(value)}
          style={{ opacity: "0.8" }}
          data={[
            {
              label: (
                <Center>
                  <IconSun size={16} stroke={1.5} />
                  <Box ml={10}>Light</Box>
                </Center>
              ),
              value: "light",
            },
            {
              label: (
                <Center>
                  <IconMoon size={16} stroke={1.5} />
                  <Box ml={10}>Dark</Box>
                </Center>
              ),
              value: "dark",
            },
          ]}
        />
      </Group>
    </MediaQuery>
  );
}
