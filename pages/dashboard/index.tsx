import React, { useState } from 'react';
import { PropertyProvider } from '../../hooks/PropertyContext';
import AdminLayout from '../../layouts/AdminLayout/index';
import { Contacts, Homepage, LandProperties, NonResidentialProperties, ResidentialProperties } from '../../pagination';
import { sanityClient } from '../../sanity';
import { Property } from '../../typings.d';
import ErrorPage from './../404';

interface DataProps {
  residential: Property[];
}

function Dashboard({ residential }: DataProps) {
  // console.log(residential);
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
      <PropertyProvider>
        <PageContent />
      </PropertyProvider>
    </AdminLayout>
  );
}

export default Dashboard;

export const getServerSideProps = async () => {
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

  const residential = sanityClient.fetch(query);

  return {
    props: {
      residential: await residential,
    }
  }
}