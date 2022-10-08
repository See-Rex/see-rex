import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout/index';
import { Contacts, Homepage, LandProperties, ResidentialProperties } from '../../pagination';
import ErrorPage from './../404';

function Dashboard() {
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
        return <ResidentialProperties />;
      case 4:
        return <LandProperties />;
      case 5:
        return <h1>Non-Residential Properties</h1>;
      default:
        return <ErrorPage />;
    }
  };

  return (
    <AdminLayout opened={opened} onClick={() => setOpened((o) => !o)} activePage={activePage} paginator={handlePage}>
      <PageContent />
    </AdminLayout>
  );
}

export default Dashboard;
