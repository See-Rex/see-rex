import { GetStaticProps } from 'next';
import React from 'react'
import { sanityClient } from '../../sanity';
import { Property } from '../../typings.d';

interface ResidentialPropertyProps {
  residentialProperty: Property[]
}

function ResidentialPropertySlug({ residentialProperty }: ResidentialPropertyProps) {
  console.log(residentialProperty);
  return (
    <div><h1>Vehicle Name: {residentialProperty[0].title}</h1></div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "property"] | order(dateRegistered desc) {
    _id,
    slug,
  }`;

  const residentialProperty = await sanityClient.fetch(query);
  console.log(residentialProperty);

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
    categories,
    vehicles,
    description,
    image
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
