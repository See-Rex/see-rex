import { Center, Container, Paper, SimpleGrid, Title } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

import style from '../_index.module.scss';
import { AppCard, FilterPicker, Search } from '../../components';
import PropertyType from '../../enums/PropertyType.enum';
import { usePropertyContext } from '../../hooks/PropertyContext';
import { sanityClient, urlFor } from '../../sanity';
import { Property } from '../../typings.d';
// import { Property } from '../../types';

interface NonResidentialProp {
  nonResidentialProperties: Property[];
}

function NonResidentialProperties({ nonResidentialProperties }: NonResidentialProp) {
  const { properties, setPropertyType } = usePropertyContext();
  setPropertyType(PropertyType.NON_RESIDENTIAL);

  const renderNonResidentialProperties = properties && (
    <>
      {nonResidentialProperties.map((property: Property) => (
        <Paper key={property.title} mx={0} my="sm" className={style.appCardContainer}>
          <AppCard
            description={property.title}
            // image={<Image src={urlFor(property.mainImage).url} alt="Residential Property" />}
            title={property.title}
            // type={property.type}
            // values={property.values}
            onClick={() => {
              location.href = `nonresidential-property/${property.slug.current}`
            }}
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
      <SimpleGrid
        cols={4}
        breakpoints={[
          { cols: 1, maxWidth: 'xs' },
          { cols: 3, maxWidth: 'lg' },
        ]}
        spacing="xs"
      >
        {/* <FilterPicker />
        <Search /> */}
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

export const serverSideProps = async () => {
  const nonResidentialQuery = `*[_type == "property" && "NONRESIDENTIAL" in (categories[]->title)] | order(dateRegistered desc) {
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
    categories[]->{
      title
    },
    vehicles[]->{
      _id,
      name,
      slug,
      dateRegistered,
      proofOfOwnership,
      mainImage
    },
    inhabitants,
    area,
    amount,
    description,
    mainImage
  }`;

  const nonResidentialProperties = sanityClient.fetch(nonResidentialQuery);

  return {
    props: {
      nonResidentialProperties: await nonResidentialProperties,
    }
  }
}
