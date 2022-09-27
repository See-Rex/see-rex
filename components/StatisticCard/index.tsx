import { Container, Group, Stack, Text } from "@mantine/core";
import React from "react";
import style from "./_index.module.scss";

type Props = {
  amount: number;
  category?: string;
  description?: string;
  icon?: React.ReactNode;
};

function StatisticCard(props: Props) {
  const { amount, category, description, icon } = props;

  return (
    <Container className={style.container} p={25} fluid>
      <Stack>
        <Group position="apart">
          <Text className={style.category}>{category}</Text>
          {icon}
        </Group>
        <Text className={style.amount} mt={-15}>
          {amount}
        </Text>
        <Text className={style.description} ml={15}>
          {description}
        </Text>
      </Stack>
    </Container>
  );
}

export default StatisticCard;
