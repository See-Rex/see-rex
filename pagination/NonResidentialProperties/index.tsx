import { Container, LoadingOverlay, Paper, SimpleGrid, Title } from "@mantine/core";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import style from "../_index.module.scss";
import { AppCard } from "../../components";
import { useAuth } from "../../hooks/AuthContext";
import { non_residential_properties_data } from "../../pseudodata";
import { Property } from "../../types";

function ResidentialProperties() {
  const { user } = useAuth();
  const [nonResidentialProperties, setNonResidentialProperties ] = useState<Property[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getResidentialProperties() {
      setIsLoading(true);
      const data = non_residential_properties_data;

      if (data) {
        setNonResidentialProperties(data);
      }
      
      setTimeout(()=>setIsLoading(false), 1000);
    }

    if (user) {
      getResidentialProperties();
    }
  }, [user, nonResidentialProperties]);
  
  const renderNonResidentialProperties = !isLoading && nonResidentialProperties && (
    <>
      {nonResidentialProperties.map((property: Property) => 
        <Paper key={property.title} mx={0} my="sm" className={style.appCardContainer}>
          <AppCard 
            description={property.description}
            image={<Image src={property.imageSrc} alt="Residential Property" />}
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
      <Title color="#b1b1b1" size={20} mb="md">
        Residential Properties
      </Title>
      <LoadingOverlay
        loaderProps={{ color: "#2f90b0", size: "xl"}}
        overlayOpacity={0.3}
        overlayColor="#c5c5c5"
        visible={isLoading}
      />
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
    </Container>
  );
}

export default ResidentialProperties;
