import { Container, Group, Paper, SimpleGrid, Title } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

import style from '../_index.module.scss';
import { AppCard, FilterPicker, Search } from '../../components';
import PropertyType from '../../enums/PropertyType.enum';
import { usePropertyContext } from '../../hooks/PropertyContext';
import { Property } from '../../types';

function ResidentialProperties() {
  const { properties, setPropertyType } = usePropertyContext();
  setPropertyType(PropertyType.RESIDENTIAL);

  const renderResidentialProperties = properties && (
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
        Residential Properties
      </Title>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { cols: 1, maxWidth: 'xs' },
          { cols: 3, maxWidth: 'lg' },
        ]}
        spacing="xs"
      >
        <FilterPicker />
        <Search />
      </SimpleGrid>
      <SimpleGrid
        cols={3}
        spacing="md"
        breakpoints={[
          { cols: 2, maxWidth: 'lg' },
          { cols: 1, maxWidth: 'xs' },
        ]}
      >
        {renderResidentialProperties}
      </SimpleGrid>
    </Container>
  );
}

export default ResidentialProperties;
