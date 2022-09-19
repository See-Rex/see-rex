import { GetStaticProps } from 'next';
import React from 'react'
import { sanityClient } from '../../sanity';
import { Homeowner } from '../../typings.d';
interface Props {
  homeowner: Homeowner; // Will be resolved once typings file gets merged to main
}

function Homeowner({ homeowner }: Props) {
  return (
    // `homeowner` is the props (array of returned data in json)
    // `homeowner`will be used when referencing the data from the CMS 
    <div><h1>homeowner.name</h1></div>
  )
}

export default Homeowner

export const getStaticPaths = async () => {
  const query = `*[_type == "homeowner"] | order(dateRegistered desc) {
    _id,
    slug {
      current
    }
  }`;

  const homeowners = await sanityClient.fetch(query);

  const owner_paths = homeowners.map((homeowner: Homeowner) => ({
    params: {
      slug: homeowner.slug.current,
    }
  }));

  return {
    owner_paths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "homeowner"] | order(dateRegistered desc) {
    _id,
    name,
    slug,
    dateRegistered,
    contactDetails,
    bio,
    mainImage
  }`;

  const homeowner = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!homeowner) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      homeowner,
    },
    revalidate: 60,
  }
}