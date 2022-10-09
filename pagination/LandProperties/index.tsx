import { Container, Group, Paper, SimpleGrid, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

import style from "../_index.module.scss";
import { AppCard, FilterPicker, Search } from "../../components";
import PropertyInfo from "../../enums/PropertyInfo.enum";
import PropertyType from "../../enums/PropertyType.enum";
import { usePropertyContext } from "../../hooks/PropertyContext";
import { Property } from "../../types";

function LandProperties() {
  const { properties, setPropertyType } = usePropertyContext();
  setPropertyType(PropertyType.LAND);

  const renderLandProperties = properties && (
    <>
      {properties.map((property: Property) => 
        <Paper key={property.title} mx={0} my="sm" className={style.appCardContainer}>
          <AppCard 
            description={property.description}
            image={<Image src={property.imageSrc} alt="Land Property" />}
            title={property.title}
            type={property.type}
            values={property.values}
          />  
        </Paper>
      )}
    </>
  );

  return (
    <Container my="md" fluid>
      <Title color="#08376B" size={20} mb="md">
        Land Properties
      </Title>
      <Group grow>
        <FilterPicker />
        <Search filterPropertyByType={PropertyInfo.NAME} />
      </Group>
      <SimpleGrid 
        cols={3}
        spacing="md"
        breakpoints={[
          { cols: 2, maxWidth: 900, spacing: 'md' },
          { cols: 1, maxWidth: 470, spacing: 'sm' },
        ]}
      >
        {renderLandProperties}
      </SimpleGrid>
    </Container>
  );
}

export default LandProperties;
