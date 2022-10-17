import { Group, MediaQuery, Stack, Text, Title, useMantineColorScheme } from '@mantine/core';
import { GetStaticProps } from 'next';
import Image from 'next/image';

import React from 'react'
import SeeRexPageLayout from '../../layouts/SeeRexPageLayout';
import Wave from '../../public/waves.png';
import { sanityClient, urlFor } from '../../sanity';
import { Vehicle } from '../../typings.d';

import style from './_index.module.scss';

interface VehicleProps {
  vehicle: Vehicle[]
}

function VehicleSlug({ vehicle }: VehicleProps) {
  const { colorScheme } = useMantineColorScheme();
  const currentVehicle = vehicle[0];
  const { dateRegistered, image, name } = currentVehicle;
  const displayTextDescription = `This vehicle was registered on ${dateRegistered}.`;
  const proofText = 'Place proof of ownership here.';

  return (
      <SeeRexPageLayout>
        <div className={style.pageContainer}>
          <Image className={style.underLayer} src={Wave} alt={'Wave underlayer'} layout='fill' />
            <MediaQuery smallerThan={1060} styles={{ display: 'none' }}>
              <Group spacing={50}>
                <Stack align={'flex-start'}>
                  <Title className={`${style.title} ${style[colorScheme]}`} mb={'xl'}>
                    {name}
                  </Title>
                  <Text className={`${style.proofOwnership} ${style[colorScheme]}`}>
                    {proofText}
                  </Text>
                  <Text className={`${style.dateRegistered} ${style[colorScheme]}`}>
                    {displayTextDescription}
                  </Text>
                </Stack>
                <div style={{height: '300px', position: 'relative', width: '500px'}}>
                  <Image 
                    alt={name}
                    className={style.vehicleImage}
                    layout='fill'
                    objectFit='contain'
                    src={urlFor(image).url()}
                  />
                </div>
              </Group>
            </MediaQuery>
            <MediaQuery largerThan={1060} styles={{ display: 'none' }}>
              <Stack align={'center'} justify={'center'}>
                <Image 
                  alt='vehicle'
                  className={style.vehicleImage}
                  objectFit='cover'
                  height={340} 
                  src={urlFor(image).url()} 
                  width={500}
                />
                <Title className={`${style.title} ${style[colorScheme]}`} size={20} mt="sm">
                  {name}
                </Title>
                <Text className={`${style.dateRegistered} ${style[colorScheme]}`}>
                  {displayTextDescription}
                </Text>
              </Stack>
            </MediaQuery>
        </div>
      </SeeRexPageLayout>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "vehicle"] | order(dateRegistered desc) {
    _id,
    slug,
  }`;

  const vehicles = await sanityClient.fetch(query);
  console.log(vehicles);

  const vehiclePaths = vehicles.map((vehicle: Vehicle) => ({
    params: {
      slug: vehicle.slug.current
    }
  }));

  return {
    fallback: "blocking",
    paths: vehiclePaths,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "vehicle"] | order(dateRegistered desc) {
    _id,
    name,
    slug,
    dateRegistered,
    proofOfOwnership,
    image
  }`;

  const vehicle = await sanityClient.fetch(query, {
    slug: params?.slug
  });
  console.log(vehicle);

  if (!vehicle) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      vehicle,
    },
    revalidate: 60,
  }
}

export default VehicleSlug;
