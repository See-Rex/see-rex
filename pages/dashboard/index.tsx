import React, { useState } from 'react';
import { PropertyProvider } from '../../hooks/PropertyContext';
import AdminLayout from '../../layouts/AdminLayout/index';
import { Contacts, Homepage, LandProperties, NonResidentialProperties, ResidentialProperties } from '../../pagination';
import { sanityClient } from '../../sanity';
import { Homeowner, Property } from '../../typings.d';
import ErrorPage from './../404';

interface DataProps {
  residential: Property[];
  nonResidential: Property[];
  land: Property[];
  people: Homeowner[];
}

function Dashboard({ land, nonResidential, people, residential }: DataProps) {
  console.log("residential");
  console.log(residential);
  console.log("nonResidential");
  console.log(nonResidential);
  console.log("land");
  console.log(land);
  console.log("people");
  console.log(people);
  const [opened, setOpened] = useState(false);
  const [activePage, setActivePage] = useState(1);

  const handlePage = (page: number) => {
    setActivePage(page);
  };

  const PageContent = () => {
    switch (activePage) {
      case 1:
        return <Homepage />;
      case 2:
        return <Contacts />;
      case 3:
        return <ResidentialProperties residentialProperties={residential} />;
      case 4:
        return <LandProperties />;
      case 5:
        return <NonResidentialProperties />;
      default:
        return <ErrorPage />;
    }
  };

  return (
    <AdminLayout opened={opened} setOpened={setOpened} activePage={activePage} paginator={handlePage}>
      <PropertyProvider >
        <PageContent />
      </PropertyProvider>
    </AdminLayout>
  );
}

export default Dashboard;

export const getServerSideProps = async () => {
  const queryProperty = `*[_type == "property" && "RESIDENTIAL" in (categories[]->title)] | order(dateRegistered desc) {
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
    categories[]->{
      title
    },
    vehicles[]->{
      _id,
      name,
      slug,
      dateRegistered,
      proofOfOwnership,
      mainImage
    },
    inhabitants,
    area,
    amount,
    description,
    mainImage
  }`;

  const queryNonResiProperty = `*[_type == "property" && "NONRESIDENTIAL" in (categories[]->title)] | order(dateRegistered desc) {
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
    categories[]->{
      title
    },
    vehicles[]->{
      _id,
      name,
      slug,
      dateRegistered,
      proofOfOwnership,
      mainImage
    },
    inhabitants,
    area,
    amount,
    description,
    mainImage
  }`;

  const queryLandProperty = `*[_type == "property" && "LAND" in (categories[]->title)] | order(dateRegistered desc) {
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
    categories[]->{
      title
    },
    vehicles[]->{
      _id,
      name,
      slug,
      dateRegistered,
      proofOfOwnership,
      mainImage
    },
    inhabitants,
    area,
    amount,
    description,
    mainImage
  }`;

  const queryPeople = `*[_type == "homeowner"] | order(dateRegistered desc) {
    _id,
    name,
    slug,
    dateRegistered,
    contactDetails,
    bio,
    mainImage
  }`;

  const residential = sanityClient.fetch(queryProperty);
  const nonResidential = sanityClient.fetch(queryNonResiProperty);
  const land = sanityClient.fetch(queryLandProperty);
  const people = sanityClient.fetch(queryPeople);

  return {
    props: {
      land: await land,
      nonResidential: await nonResidential,
      people: await people,
      residential: await residential,
    }
  }
}