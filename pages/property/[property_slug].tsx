import { GetStaticProps } from 'next';
import React from 'react'
import { sanityClient } from '../../sanity';
import { Property } from '../../typings.d';

interface Props {
  property: Property; // Will be resolved once typings file gets merged to main
}

function Property({ property }: Props) {
  return (
    // `property` is the props (array of returned data in json)
    // `property`will be used when referencing the data from the CMS 
    <div><h1>property.name</h1></div>
  )
}

export default Property

export const getStaticPaths = async () => {
  const query = `*[_type == "property"] | order(dateRegistered desc) {
    _id,
    slug {
      current
    }
  }`;

  const properties = await sanityClient.fetch(query);

  const property_paths = properties.map((property: Property) => ({
    params: {
      slug: property.slug.current,
    }
  }));

  return {
    property_paths,
    fallback: "blocking",
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
    mainImage
  }`;

  const property = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!property) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      property,
    },
    revalidate: 60,
  }
}