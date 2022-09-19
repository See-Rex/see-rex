import { GetStaticProps } from 'next';
import React from 'react'
import { sanityClient } from '../../sanity';
import { Vehicle } from '../../typings.d';

interface Props {
  vehicle: Vehicle; // Will be resolved once typings file gets merged to main
}

function Vehicle({ vehicle }: Props) {
  return (
    // `property` is the props (array of returned data in json)
    // `property`will be used when referencing the data from the CMS 
    <div><h1>vehicle.title</h1></div>
  )
}

export default Vehicle

export const getStaticPaths = async () => {
  const query = `*[_type == "vehicle"] | order(dateRegistered desc) {
    _id,
    slug {
      current
    }
  }`;

  const vehicles = await sanityClient.fetch(query);

  const vehicle_paths = vehicles.map((vehicle: Vehicle) => ({
    params: {
      slug: vehicle.slug.current,
    }
  }));

  return {
    vehicle_paths,
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
    mainImage
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