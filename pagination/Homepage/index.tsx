import { Container, Grid, Title } from '@mantine/core';
import React from 'react';
import { ProgressCard, StatisticCard } from '../../components';
import { Homeowner, Property } from '../../typings.d';

interface DashboardProp {
  residentialProperties: Property[];
  landProperties: Property[];
  nonResidentialProperties: Property[];
  people: Homeowner[];
}

function Homepage(props: DashboardProp) {
  const { landProperties, nonResidentialProperties, people, residentialProperties} = props;
  let numberOfVehicles = 0;
  const numberOfProperties = landProperties.length + nonResidentialProperties.length + 
    residentialProperties.length;

  residentialProperties.forEach((property)=>{
    if (property.vehicles.length > 0) {
      numberOfVehicles++;
    }
  });
  nonResidentialProperties.forEach((property)=>{
    if (property.vehicles.length > 0) {
      numberOfVehicles++;
    }
  });
  

  return (
    <Container my="md" fluid>
      <Title color="#b1b1b1" size={20} mb="md">
        Summary
      </Title>
      <Grid grow>
        <Grid.Col xs={6} xl={3}>
          <StatisticCard 
            amount={residentialProperties.length} 
            category="RESIDENTIAL" 
            description="Current number of Residential Properties" 
          />
        </Grid.Col>
        <Grid.Col xs={6} xl={3}>
          <StatisticCard 
            amount={nonResidentialProperties.length} 
            category="NON-RESIDENTIAL" 
            description="Current number of Non - Residential Properties" 
          />
        </Grid.Col>
        <Grid.Col xs={6} xl={3}>
          <StatisticCard 
            amount={landProperties.length} 
            category="LAND" 
            description="Current number of Land Properties" 
          />
        </Grid.Col>
        <Grid.Col xs={6} xl={3}>
          <StatisticCard 
            amount={people.length} 
            category="HOMEOWNERS" 
            description="Current number of Home Owners" 
          />
        </Grid.Col>
        <Grid.Col sm={12} md={4}>
          <ProgressCard 
            label="Vehicles" 
            stats={numberOfVehicles.toString()} 
            progress={numberOfVehicles} 
            color="#35C0ED" 
            icon="up" 
          />
        </Grid.Col>
        <Grid.Col sm={12} md={4}>
          <ProgressCard 
            label="Properties"
            stats={numberOfProperties.toString()}
            progress={numberOfProperties}  
            color="#35C0ED"  
            icon={'up'}          
          />
        </Grid.Col>
        {/* <Grid.Col xs={12}>
          <GroupCard data={stat_data} />
        </Grid.Col> */}
      </Grid>
    </Container>
  );
}

export default Homepage;
