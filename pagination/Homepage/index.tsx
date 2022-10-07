import { Container, Grid, Title } from '@mantine/core';
import React from 'react';
import { GroupCard, ProgressCard, StatisticCard } from '../../components';
import { stat_data } from '../../pseudodata';

function Homepage() {
  return (
    <Container my="md" fluid>
      <Title color="#b1b1b1" size={20} mb="md">
        Summary
      </Title>
      <Grid grow>
        <Grid.Col xs={6} xl={3}>
          <StatisticCard amount={100} category="Testing" description="This how your statistics are shown" />
        </Grid.Col>
        <Grid.Col xs={6} xl={3}>
          <StatisticCard amount={100} category="Testing" description="This how your statistics are shown" />
        </Grid.Col>
        <Grid.Col xs={6} xl={3}>
          <StatisticCard amount={100} category="Testing" description="This how your statistics are shown" />
        </Grid.Col>
        <Grid.Col xs={6} xl={3}>
          <StatisticCard amount={100} category="Testing" description="This how your statistics are shown" />
        </Grid.Col>
        <Grid.Col sm={12} md={4}>
          <ProgressCard label="Test" stats="3,450" progress={3450} color="#35C0ED" icon="up" />
        </Grid.Col>
        <Grid.Col sm={12} md={4}>
          <ProgressCard label="Test" stats="3,450" progress={3450} color="#35C0ED" icon="up" />
        </Grid.Col>
        <Grid.Col sm={12} md={4}>
          <ProgressCard label="Test" stats="3,450" progress={3450} color="#35C0ED" icon="up" />
        </Grid.Col>
        <Grid.Col xs={12}>
          <GroupCard data={stat_data} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Homepage;
