import { GetStaticProps } from 'next';
import React from 'react'
import { sanityClient } from '../../sanity';
import { Vehicle } from '../../typings.d';

interface VehicleProps {
  vehicle: Vehicle[]
}

function VehicleSlug({ vehicle }: VehicleProps) {
  console.log(vehicle);
  return (
    <div><h1>Vehicle Name: {vehicle[0].name}</h1></div>
  )
}

export default VehicleSlug;

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
    paths: vehiclePaths,
    fallback: "blocking",
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