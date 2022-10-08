import { Container, LoadingOverlay, Paper, SimpleGrid, Title } from "@mantine/core";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import style from "../_index.module.scss";
import { AppCard } from "../../components";
import { useAuth } from "../../hooks/AuthContext";
import { land_properties_data } from "../../pseudodata";
import { Property } from "../../types";

function LandProperties() {
  const { user } = useAuth();
  const [landProperties, setLandProperties ] = useState<Property[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getlandProperties() {
      setIsLoading(true);
      const data = land_properties_data;

      if (data) {
        setLandProperties(data);
      }
      
      setTimeout(()=>setIsLoading(false), 1000);
    }

    if (user) {
      getlandProperties();
    }
  }, [user, landProperties]);
  
  const renderLandProperties = !isLoading && landProperties && (
    <>
      {landProperties.map((property: Property) => 
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
      <Title color="#b1b1b1" size={20} mb="md">
        Land Properties
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
        {renderLandProperties}
      </SimpleGrid>
    </Container>
  );
}

export default LandProperties;
