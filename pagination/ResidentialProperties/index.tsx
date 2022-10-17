import { Center, Container, Paper, SimpleGrid, Title } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

import style from '../_index.module.scss';
import { AppCard, FilterPicker, Search } from '../../components';
import PropertyType from '../../enums/PropertyType.enum';
import { usePropertyContext } from '../../hooks/PropertyContext';
import { sanityClient } from '../../sanity';
import { Property } from '../../types';

interface ResidentialProp {
  residentialProp: Property[];
}

function ResidentialProperties({ residentialProp }: ResidentialProp) {
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
      <Center>
        <SimpleGrid
          cols={3}
          spacing="md"
          breakpoints={[
            { cols: 2, maxWidth: 'lg' },
            { cols: 1, maxWidth: 'sm' },
          ]}
        >
          {renderResidentialProperties}
        </SimpleGrid>
      </Center>
    </Container>
  );
}

export default ResidentialProperties;

export const serverSideProps = async () => {
  const query = `*[_type == "property"] | order(dateRegistered desc) {
    _id,
    title,
    dateRegistered,
    slug,
    homeowner-> {
      name,
      image,
      contactDetails,
      dateRegistered
    },
    categories,
    vehicles,
    description,
    mainImage
  }`;

  const residentialProperties = sanityClient.fetch(query);

  return {
    props: {
      residentialProperties,
    }
  }
}
