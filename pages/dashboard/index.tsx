import React, { useState } from 'react';
import { PropertyProvider } from '../../hooks/PropertyContext';
import AdminLayout from '../../layouts/AdminLayout/index';
import { 
  Contacts, 
  Homepage, 
  LandProperties, 
  NonResidentialProperties, 
  ResidentialProperties 
} from '../../pagination';
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
        return <NonResidentialProperties />;
      default:
        return <ErrorPage />;
    }
  };

  return (
    <AdminLayout opened={opened} onClick={() => setOpened((o) => !o)} activePage={activePage} paginator={handlePage}>
      <PropertyProvider>
        <PageContent />
      </PropertyProvider>
    </AdminLayout>
  );
}

export default Dashboard;
