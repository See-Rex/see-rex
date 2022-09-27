import {
  Container,
  Divider,
  Group,
  MediaQuery,
  RingProgress,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
import style from "./_index.module.scss";

type Props = {
  amount: number;
  amount2?: number;
  amount3?: number;
  category?: string;
  description?: string;
  description2?: string;
  description3?: string;
  icon?: React.ReactNode;
  type: "grid" | "group";
};

function StatisticCard(props: Props) {
  const {
    amount,
    amount2,
    amount3,
    category,
    description,
    description2,
    description3,
    icon,
    type,
  } = props;

  const renderGridStatCard = type === "grid" && (
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

  const renderGroupStatCard = type === "group" && (
    <Container className={style.groupContainer} p={35} fluid>
      <Group position="apart">
        <Stack className={style.groupStack} mt={10} mb={10}>
          <Text className={style.groupAmount} mt={-15}>
            {amount}
          </Text>
          <Text className={style.groupDescription} mt={-10}>
            {description}
          </Text>
        </Stack>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Divider orientation="vertical" size={2} color={"white"} mr={10} />
        </MediaQuery>
        <Stack className={style.groupStack} mt={10} mb={10}>
          <Text className={style.groupAmount} mt={-15}>
            {amount2}
          </Text>
          <Text className={style.groupDescription} mt={-10}>
            {description2}
          </Text>
        </Stack>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Divider orientation="vertical" size={2} color={"white"} mr={10} />
        </MediaQuery>
        <Stack className={style.groupStack} mt={10} mb={10}>
          <Text className={style.groupAmount} mt={-15}>
            {amount3}
          </Text>
          <Text className={style.groupDescription} mt={-10}>
            {description3}
          </Text>
        </Stack>
      </Group>
    </Container>
  );

  return (
    <>
      {renderGridStatCard}
      {renderGroupStatCard}
    </>
  );
}

export default StatisticCard;
