import {
  useMantineColorScheme,
  SegmentedControl,
  Group,
  Center,
  Box,
  StylesApiProvider,
  MediaQuery,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons";

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
              value: "light",
              label: (
                <Center>
                  <IconSun size={16} stroke={1.5} />
                  <Box ml={10}>Light</Box>
                </Center>
              ),
            },
            {
              value: "dark",
              label: (
                <Center>
                  <IconMoon size={16} stroke={1.5} />
                  <Box ml={10}>Dark</Box>
                </Center>
              ),
            },
          ]}
        />
      </Group>
    </MediaQuery>
  );
}
