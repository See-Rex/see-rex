import { GetStaticProps } from 'next';
import React from 'react'
import { sanityClient } from '../../sanity';
import { Property } from '../../typings.d';

interface NonResidentialPropertyProps {
  nonResidentialProperty: Property[]
}

function NonResidentialPropertySlug({ nonResidentialProperty }: NonResidentialPropertyProps) {
  console.log(nonResidentialProperty);
  return (
    <div><h1>Vehicle Name: {nonResidentialProperty[0].title}</h1></div>
  )
}

export default NonResidentialPropertySlug;

export const getStaticPaths = async () => {
  const query = `*[_type == "lot"] | order(dateRegistered desc) {
    _id,
    slug,
  }`;

  const nonResidentialProperty = await sanityClient.fetch(query);
  console.log(nonResidentialProperty);

  const nonResidentialPropertyPaths = nonResidentialProperty.map((nonResidentialProperty: Property) => ({
    params: {
      slug: nonResidentialProperty.slug.current
    }
  }));

  return {
    paths: nonResidentialPropertyPaths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "lot"] | order(dateRegistered desc) {
    _id,
    title,
    dateRegistered,
    slug,
    categories,
    description,
    image
  }`;

  const nonResidentialProperty = await sanityClient.fetch(query, {
    slug: params?.slug
  });
  console.log(nonResidentialProperty);

  if (!nonResidentialProperty) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      nonResidentialProperty,
    },
    revalidate: 60,
  }
}