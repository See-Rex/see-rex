import { GetStaticProps } from 'next';
import React from 'react'
import { sanityClient } from '../../../sanity';
import { Vehicle } from '../../../typings.d';

interface VehicleProps {
  vehicles: Vehicle;
}

function VehicleSlug({ vehicles }: VehicleProps) {
  return (
    <div><h1>{vehicles.name}</h1></div>
  )
}

export default VehicleSlug;

export const getStaticPaths = async () => {
  const query = encodeURIComponent(`*[_type == "vehicle"] | order(yearCreated desc) {
    _id,
    slug {
        current
    }
}`);

  const vehicle = await sanityClient.fetch(query);

  const paths = vehicle.map((vehicle: Vehicle) => ({
    params: {
      slug: vehicle.slug.current,
    }
  }));

  return {
    paths,
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
    slug: params?.slug,
  });

  if (!vehicle) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      vehicle,
    },
    revalidate: 60,
  }
}