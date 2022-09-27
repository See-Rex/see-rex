import {
  Container,
  Group,
  Paper,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import style from "./_index.module.scss";

type Props = {
  amount: number;
  category: string;
  description: string;
  icon?: React.ReactNode;
};

function StatisticCard(props: Props) {
  const { colorScheme } = useMantineColorScheme();
  const { amount, category, description, icon } = props;

  return (
    <Paper withBorder radius="md" p="xs" className={style[colorScheme]}>
      <Container className={style.container} p={25} fluid>
        <Stack>
          <Group position="apart">
            <Text className={`${style.category} ${style[colorScheme]}`}>
              {category}
            </Text>
            {icon}
          </Group>
          <Text className={`${style.amount} ${style[colorScheme]}`} mt={-15}>
            {amount}
          </Text>
          <Text
            className={`${style.description} ${style[colorScheme]}`}
            ml={15}
          >
            {description}
          </Text>
        </Stack>
      </Container>
    </Paper>
  );
}

export default StatisticCard;
