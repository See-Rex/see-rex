import { Container, Grid, ScrollArea, Title } from "@mantine/core";
import React from "react";
import { GroupCard, ProgressCard } from "../../components";

function Homepage() {
  const data = [
    {
      title: "Page views",
      stats: "456,133",
      description:
        "24% more than in the same month last year, 33% more that two years ago",
    },
    {
      title: "New users",
      stats: "2,175",
      description:
        "13% less compared to last month, new user engagement up by 6%",
    },
    {
      title: "Completed orders",
      stats: "1,994",
      description:
        "1994 orders were completed this month, 97% satisfaction rate",
    },
  ];
  return (
    <Container my="md" fluid>
      <Title size={20} mb="md">
        Summary
      </Title>
      <Grid>
        <Grid.Col xs={4}>
          <ProgressCard
            label="Test"
            stats="3,450"
            progress={3450}
            color="#35C0ED"
            icon="up"
          />
        </Grid.Col>
        <Grid.Col xs={4}>
          <ProgressCard
            label="Test"
            stats="3,450"
            progress={3450}
            color="#35C0ED"
            icon="up"
          />
        </Grid.Col>
        <Grid.Col xs={4}>
          <ProgressCard
            label="Test"
            stats="3,450"
            progress={3450}
            color="#35C0ED"
            icon="up"
          />
        </Grid.Col>
        <Grid.Col xs={12}>
          <GroupCard data={data} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Homepage;
