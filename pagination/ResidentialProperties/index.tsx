import { Container, Grid, Paper, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { AppCard } from "../../components";
import ResidentialImage from "../../public/background1.png";

function ResidentialProperties() {
  const data = [
    {
      description:
        "Home of orange people.",
      imageSrc: ResidentialImage,
      title: "Orange Home",
      type: "Residential",
      values: ["100", "25", "30", "10"],
    },
    {
      description:
        "Home of Norway people.",
      imageSrc: ResidentialImage,
      title: "Norway Home",
      type: "Residential",
      values: ["100", "25", "30", "10"],
    },
    {
      description:
        "Sisig is best served in Tatay's House",
      imageSrc: ResidentialImage,
      title: "Tatay's House",
      type: "Residential",
      values: ["100", "25", "30", "10"],
    },
    {
      description:
        "Home of Violet people.",
      imageSrc: ResidentialImage,
      title: "Violet Home",
      type: "Residential",
      values: ["100", "25", "30", "10"],
    },
  ];
  
  const renderResidentialProperties = (
    <Grid.Col xs={4}>{data.map(({
      description,
      imageSrc,
      title,
      type,
      values
    }) => 
      <Paper key={title} mx={0} my="sm">
        <AppCard 
          description={description}
          image={<Image src={imageSrc} alt="Residential Property" />}
          title={title}
          type={type}
          values={values}
        />  
      </Paper>
    )}
    </Grid.Col>
    );

  return (
    <Container my="md" fluid>
      <Title size={20} mb="md">
        Residential Properties
      </Title>
      <Grid gutter={20}>
        {renderResidentialProperties}
        {renderResidentialProperties}
        {renderResidentialProperties}
      </Grid>
    </Container>
  );
}

export default ResidentialProperties;