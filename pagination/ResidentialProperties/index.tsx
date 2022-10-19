import { Center, Container, Paper, SimpleGrid, Title } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

import style from '../_index.module.scss';
import { AppCard, FilterPicker, Search } from '../../components';
import { sanityClient, urlFor } from '../../sanity';
import { Property } from '../../typings.d';
// import { Property } from '../../typings.d';

interface ResidentialProp {
  residentialProperties: Property[];
}

function ResidentialProperties({ residentialProperties }: ResidentialProp) {
  // const { properties, setPropertyType } = usePropertyContext();
  // setPropertyType(PropertyType.RESIDENTIAL);
  console.log("Residential Prop:");
  console.log(residentialProperties);

  const renderResidentialProperties = residentialProperties && (
    <>
      {residentialProperties.map((property: Property) => (
        <Paper key={property.title} mx={0} my="sm" className={style.appCardContainer}>
          <AppCard
            description={property.title}
            // image={<Image src={urlFor(property.mainImage).url} alt="Residential Property" />}
            title={property.title}
          // type={property.type}
          // values={property.values}
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

export const serverSideProps = async () => {
  // const query = `*[_type == "property"] | order(dateRegistered desc) {
  //   _id,
  //   title,
  //   dateRegistered,
  //   slug,
  //   homeowner-> {
  //     name,
  //     image,
  //     contactDetails,
  //     dateRegistered
  //   },
  //   categories,
  //   vehicles,
  //   description,
  //   mainImage
  // }`;

  const residentialQuery = `*[_type == "property" && "RESIDENTIAL" in (categories[]->title)] | order(dateRegistered desc) {
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

  const residentialProperties = sanityClient.fetch(residentialQuery);

  return {
    props: {
      residentialProperties: await residentialProperties,
    }
  }
}

export default ResidentialProperties;
