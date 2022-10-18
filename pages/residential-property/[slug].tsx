import { AppShell, AspectRatio, Avatar, Card, Container, Divider, Group, Image, MediaQuery, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import PortableText from 'react-portable-text';
import { IconAt, IconPhoneCall } from '@tabler/icons';
import { GetStaticProps } from 'next';
import React from 'react'
import style from 'styled-jsx/style';
import { BasicFooter, BasicHeader } from '../../components';
import { sanityClient, urlFor } from '../../sanity';
import { Property } from '../../typings.d';

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

  // console.log(residentialProperty);

  return (
    <AppShell
      header={<BasicHeader opened={false} />}
      footer={<BasicFooter height={56} />}
      fixed
    >
      <Container py="xl">
        <SimpleGrid cols={2} breakpoints={[{ cols: 1, maxWidth: 'sm' }]}>
          <Stack mb={'lg'}>
            <AspectRatio ratio={1920 / 1080}>
              <Image src={urlFor(mainImage).url()} alt={title} radius={'md'} />
            </AspectRatio>
            <div>
              <Group noWrap>
                <Avatar src={urlFor(homeowner.image).url()} size={96} radius={'md'} />
                <div>
                  <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
                    {title}
                  </Text>

                  <Text size="lg" weight={500}>
                    {homeowner.name}
                  </Text>

                  <Group noWrap spacing={10} mt={3}>
                    <IconAt stroke={1.5} size={16} />
                    <Text size="xs" color="dimmed">
                      {dateRegistered}
                    </Text>
                  </Group>

                  <Group noWrap spacing={10} mt={5}>
                    <IconPhoneCall stroke={1.5} size={16} />
                    <Text size="xs" color="dimmed">
                      {title}
                    </Text>
                  </Group>
                </div>
              </Group>
            </div>
          </Stack>
          <MediaQuery largerThan={'sm'} styles={{ display: 'none' }} >
            <Divider />
          </MediaQuery>
          <Group align={'flex-start'}>
            <MediaQuery smallerThan={'sm'} styles={{ display: 'none' }} >
              <Divider orientation='vertical' />
            </MediaQuery>
            <Stack ml={'sm'}>
              <Title weight={700}>
                {title}
              </Title>
              <Text mt={5}>
                This property is owned by {homeowner.name}.
              </Text>
            </Stack>
          </Group>
        </SimpleGrid>
        <MediaQuery smallerThan={'sm'} styles={{ display: 'none' }} >
          <Divider orientation='horizontal' />
        </MediaQuery>
        <Group align={"flex-start"}>
          <Stack ml={'sm'}>
            <Title weight={700}>
              Description
            </Title>
            <Text mt={5}>
              <PortableText
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                content={description}
              />
            </Text>
          </Stack>
        </Group>
      </Container>
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
