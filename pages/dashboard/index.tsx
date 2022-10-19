import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { PropertyProvider } from '../../hooks/PropertyContext';
import AdminLayout from '../../layouts/AdminLayout/index';
import { Contacts, Homepage, LandProperties, NonResidentialProperties, ResidentialProperties } from '../../pagination';
import { sanityClient } from '../../sanity';
import { Property } from '../../typings.d';
import ErrorPage from './../404';

interface PropertyProps {
  land: Property[];
}

function Dashboard({ land }: PropertyProps) {
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
        return <ResidentialProperties residentialProp={[]} />;
      case 4:
        return <LandProperties land={land} />;
      case 5:
        return <NonResidentialProperties />;
      default:
        return <ErrorPage />;
    }
  };

  return (
    <AdminLayout opened={opened} setOpened={setOpened} activePage={activePage} paginator={handlePage}>
      <PropertyProvider>
        <PageContent />
      </PropertyProvider>
    </AdminLayout>
  );
}

export default Dashboard;

export const getStaticProps: GetStaticProps = async () => {
  const query = `*[_type == "property" && "RESIDENTIAL" in (categories[]->title)] | order(dateRegistered desc) {
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
    vehicles,
    description,
    mainImage
  }`;

  const propertyData = sanityClient.fetch(query);

  return {
    props: {
      propertyData,
    }
  }
}