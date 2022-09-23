import { AppShell, BurgerProps } from "@mantine/core";
import React, { useState } from "react";
import { BasicHeader } from "../../components";
import CollapsedBar from "../../components/CollapsedBar";

type Props = {
    children: React.ReactNode;
    activePage: number;
    paginator: Function;
};

function AdminLayout(props: BurgerProps & Props) {
    const { children, activePage, paginator, opened, onClick } = props;

    return (
        <AppShell
            header={<BasicHeader opened={opened} onClick={onClick} burger />}
            navbar={
                <CollapsedBar
                    hidden={!opened}
                    page={activePage}
                    setPage={paginator}
                />
            }
            fixed
        >
            {children}
        </AppShell>
    );
}

export default AdminLayout;
