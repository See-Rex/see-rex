import { Center, Container, Group, Paper, SimpleGrid, Title } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

import style from '../_index.module.scss';
import { AppCard, FilterPicker, Search } from '../../components';
import PropertyType from '../../enums/PropertyType.enum';
import { usePropertyContext } from '../../hooks/PropertyContext';
import { Property } from '../../types';

function NonResidentialProperties() {
  const { properties, setPropertyType } = usePropertyContext();
  setPropertyType(PropertyType.NON_RESIDENTIAL);

  const renderNonResidentialProperties = properties && (
    <>
      {properties.map((property: Property) => (
        <Paper key={property.title} mx={0} my="sm" className={style.appCardContainer}>
          <AppCard
            description={property.description}
            image={<Image src={property.imageSrc} alt="Residential Property" />}
            title={property.title}
            type={property.type}
            values={property.values}
          />
        </Paper>
      ))}
    </>
  );

  return (
    <Container my="md" fluid>
      <Title color="#08376B" size={20} mb="md">
        Non - Residential Properties
      </Title>
      <Group grow>
        <FilterPicker />
        <Search />
      </Group>
      <SimpleGrid
        cols={3}
        spacing="md"
        breakpoints={[
          { cols: 2, maxWidth: 900, spacing: 'md' },
          { cols: 1, maxWidth: 470, spacing: 'sm' },
        ]}
      >
        {renderNonResidentialProperties}
      </SimpleGrid>
      <Center>
        <SimpleGrid
          cols={3}
          spacing="md"
          breakpoints={[
            { cols: 2, maxWidth: 'lg' },
            { cols: 1, maxWidth: 'sm' },
          ]}
        >
          {renderNonResidentialProperties}
        </SimpleGrid>
      </Center>
    </Container>
  );
}

export default NonResidentialProperties;
