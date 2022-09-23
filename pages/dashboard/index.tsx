import React, { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout/index";

function Dashboard() {
    const [opened, setOpened] = useState(false);
    const [activePage, setActivePage] = useState(1);

    const handlePage = (page: number) => {
        setActivePage(page);
    };

    const PageContent = () => {
        switch (activePage) {
            case 1:
                return <h1>Dashboard</h1>;
            case 2:
                return <h1>Contacts</h1>;
            case 3:
                return <h1>Residential Properties</h1>;
            case 4:
                return <h1>Land Properties</h1>;
            case 5:
                return <h1>Non-Residential Properties</h1>;
            default:
                return <h1>Error 404: Page not found</h1>;
        }
    };

    return (
        <AdminLayout
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            activePage={activePage}
            paginator={handlePage}
        >
            <PageContent />
        </AdminLayout>
    );
}

export default Dashboard;
