import { Carousel } from '@mantine/carousel';
import {
  AppShell,
  Avatar,
  Badge,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  ScrollArea,
  Stack,
  Text,
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
  const showCarouselControls = vehicles.length > 0;

  const renderVehiclesCarousel = <Carousel
    my={'xl'}
    sx={{ maxWidth: 800 }}
    height={200}
    withControls={showCarouselControls}
  >
    {vehicles.map((vehicle) => (
      <Carousel.Slide key={vehicle._id}>
        <Group>
          <Image
            alt={vehicle.name}
            fit={'cover'}
            height={200}
            src={urlFor(vehicle.image).url()}
            width={300}
            withPlaceholder
          />
          <Stack spacing={2}>
            <Text size={26} weight={500}>{vehicle.name}</Text>
            <Text size={'sm'} color={'dimmed'} weight={500}>{vehicle.dateRegistered}</Text>
            <Paper>
              <Text align={'justify'} sx={{ maxWidth: 400 }}>
                <PortableText
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  content={vehicle.proofOfOwnership}
                />
              </Text>
            </Paper>
          </Stack>
        </Group>
      </Carousel.Slide>
    ))}
  </Carousel>;

  const renderColumnLeft = <Container>
    <Card.Section>
      <Image src={urlFor(mainImage).url()} height={392} alt={title} withPlaceholder />
    </Card.Section>
    <Card.Section mt="md">
      <Group position="right">
        <Stack align={'flex-end'}>
          <Text size={26} weight={500}>
            {title}
          </Text>
          <Badge className={`${style.type} ${style[colorScheme]}`}>{categories[0].title}</Badge>
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
    {renderVehiclesCarousel}
  </Container>;

  const renderHomeOwnerHistory = <ScrollArea.Autosize maxHeight={340} sx={{ maxWidth: 400 }} mx="auto">
    {homeownerHistory.map((owner) =>
      <Card key={owner._id} mb={5} withBorder>
        <Group>
          <Avatar src={urlFor(owner.image).url()} size={70} radius={50} />
          <Stack spacing={2}>
            <Text size={'md'} weight={500}>{owner.name}</Text>
            <Group>
              <Group noWrap spacing={10} mt={10}>
                <IconPhoneCall stroke={1.5} size={20} />
                <Text size="sm" color="dimmed">{owner.contactDetails}</Text>
              </Group>
              <Group noWrap spacing={10} mt={10}>
                <IconCalendar stroke={1.5} size={20} />
                <Text size="sm" color="dimmed">{owner.dateRegistered}</Text>
              </Group>
            </Group>
          </Stack>
        </Group>
      </Card>
    )}
  </ScrollArea.Autosize>;

  const renderColumnRight = <Container pt={32} fluid>
    <Stack align={'center'}>
      <Avatar src={urlFor(homeowner.image).url()} size={166} radius={100} />
      <Stack align={'center'} spacing={2}>
        <Text size={24} weight={500}>
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
      </Stack>
    </Stack>
    <Stack mt={88}>
      <Text size={26} weight={500}>
        Home Owner History
      </Text>
      {renderHomeOwnerHistory}
    </Stack>
  </Container>;

  return (
    <AppShell
      header={<BasicHeader opened={false} />}
      footer={<BasicFooter height={56} />}
      fixed
    >
      <Paper className={style.residentialPage} py={40}>
        <Grid columns={12}>
          <Grid.Col span={8}>{renderColumnLeft}</Grid.Col>
          <Grid.Col span={4}>{renderColumnRight}</Grid.Col>
        </Grid>
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
    homeownerHistory[]->{
      _id,
      name,
      image,
      contactDetails,
      dateRegistered
    },
    categories[]->{
      title,
    },
    description,
    mainImage,
    vehicles[]->{
      _id,
      name,
      image,
      dateRegistered,
      proofOfOwnership,
    },
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
