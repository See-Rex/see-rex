import { Center, Container, Paper, SimpleGrid, Title } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

import style from '../_index.module.scss';
import { AppCard, FilterPicker, Search } from '../../components';
// import PropertyType from '../../enums/PropertyType.enum';
// import { usePropertyContext } from '../../hooks/PropertyContext';
import { sanityClient } from '../../sanity';
// import { Propertyy } from '../../types';
import { Property } from '../../typings.d'

interface LandProps {
  land: Property[];
}

function LandProperties({ land }: LandProps) {
  // const { properties, setPropertyType } = usePropertyContext();
  // setPropertyType(PropertyType.LAND);
  console.log(land);

  const renderLandProperties = land && (
    <>
      {land.map((property: Property) => (
        <Paper key={property.title} mx={0} my="sm" className={style.appCardContainer}>
          <AppCard
            description="This is a land property"
            // image={<Image src={land[0].mainImage.asset.url} alt="Land Property" />}
            title={property.title}
            // type={"LAND"}
            // values={property.values}
            onClickEvent={location.href = `/${land[0].slug.current}`}
          />
        </Paper>
      ))}
    </>
  );

  return (
    <Container my="md" fluid>
      <Title color="#08376B" size={20} mb="md">
        Land Properties
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
          {renderLandProperties}
        </SimpleGrid>
      </Center>
    </Container>
  );
}

export default LandProperties;

export const getServerSideProps = async () => {
  // const query = `*[_type == "property" && "LAND" in (categories[]->title)] | order(dateRegistered desc) {
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
  //   categories[]->{
  //     title
  //   },
  //   vehicles,
  //   description,
  //   mainImage
  // }`;

  const query = `*[_type == "property"] {
    _id,
    title,
    slug,
    vehicles,
    description,
    mainImage,
  }`;

  const land = await sanityClient.fetch(query);
  console.log(land);

  return {
    props: {
      land,
    }
  }
}
