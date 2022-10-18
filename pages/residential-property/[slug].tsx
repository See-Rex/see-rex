import { 
  AppShell,
  Avatar, 
  Badge, 
  Card, 
  Container, 
  Divider, 
  Grid, 
  Group, 
  Image, 
  MediaQuery, 
  Paper,
  SimpleGrid, 
  Stack, 
  Text, 
  Title, 
  useMantineColorScheme
} from '@mantine/core';
import { IconCalendar, IconPhoneCall } from '@tabler/icons';
import { GetStaticProps } from 'next';
import React from 'react';
import PortableText from 'react-portable-text';
import { BasicFooter, BasicHeader } from '../../components';
import { sanityClient, urlFor } from '../../sanity';
import { Property } from '../../typings.d';

import style from "./_index.module.scss";

interface ResidentialPropertyProps {
  residentialProperty: Property[]
}

function ResidentialPropertySlug({ residentialProperty }: ResidentialPropertyProps) {
  const {
    categories,
    dateRegistered,
    description,
    homeowner,
    homeownerHistory,
    mainImage,
    title,
    vehicles
  } = residentialProperty[2];
  const { colorScheme } = useMantineColorScheme();

  const renderPropertyHeader = <Container>
    <Card.Section>
      <Image src={urlFor(mainImage).url()} height={392} alt={title} />
    </Card.Section>
    <Card.Section mt="md">
      <Group position="right">
        <Stack align={'flex-end'}>
          <Text size={26} weight={500}>
            {title}
          </Text>
          <Badge className={`${style.type} ${style[colorScheme]}`}>Residential</Badge>
        </Stack>
        <div className={style.richText}>
          <Text align={'justify'}>
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              content={description}
            />
          </Text>
        </div>
      </Group>
    </Card.Section>
  </Container>;

  const renderProfileCard = <Container pt={32} fluid>
    <Stack align={'center'}>
    <Avatar src={urlFor(homeowner.image).url()} size={166} radius={100} />
      <Group>
        <div>
          <Text size={30} weight={500}>
            {homeowner.name}
          </Text>
          <Group noWrap spacing={10} mt={10}>
            <IconPhoneCall stroke={1.5} size={20} />
            <Text size="sm" color="dimmed">
              {homeowner.contactDetails}
            </Text>
          </Group>
          <Group noWrap spacing={10} mt={10}>
            <IconCalendar stroke={1.5} size={20} />
            <Text size="sm" color="dimmed">
              {homeowner.dateRegistered}
            </Text>
          </Group>
        </div>
      </Group>
    </Stack>
</Container>;

  return (
    <AppShell
      header={<BasicHeader opened={false} />}
      footer={<BasicFooter height={56} />}
      fixed
    >
      <Paper className={style.residentialPage} p="xl">   
      <Grid columns={12}>
        <Grid.Col span={8}>{renderPropertyHeader}</Grid.Col>
        <Grid.Col span={4}>{renderProfileCard}</Grid.Col>
      </Grid> 
        <MediaQuery smallerThan={'sm'} styles={{ display: 'none' }} >
          <Divider mt={35} orientation='horizontal' />
        </MediaQuery>
        <Group spacing={100} align={'flex-start'}>
          <Stack my={'lg'}>
            <Title size={24} weight={700}>
              Vehicles
            </Title>
            <Container>
              <Group>
                <Avatar src={urlFor(homeowner.image).url()} size={50} radius={'md'} />
                <Text>Name of vehicle</Text>
              </Group>
            </Container>
          </Stack>
          <Stack my={'lg'}>
            <Title size={24} weight={700}>
              Home Owner History
            </Title>
          </Stack>
        </Group>
      </Paper>
    </AppShell>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "property"] | order(dateRegistered desc) {
    _id,
    slug,
  }`;

  const residentialProperty = await sanityClient.fetch(query);

  const residentialPropertyPaths = residentialProperty.map((residentialProperty: Property) => ({
    params: {
      slug: residentialProperty.slug.current
    }
  }));

  return {
    fallback: "blocking",
    paths: residentialPropertyPaths,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
    homeownerHistory,
    categories,
    vehicles,
    description,
    mainImage
  }`;

  const residentialProperty = await sanityClient.fetch(query, {
    slug: params?.slug
  });
  console.log(residentialProperty);

  if (!residentialProperty) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      residentialProperty,
    },
    revalidate: 60,
  }
}

export default ResidentialPropertySlug;
