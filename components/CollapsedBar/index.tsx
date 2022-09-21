import { Code, Group, Navbar } from "@mantine/core";
import style from "./_index.module.scss";
import React, { useState } from "react";
import Logo from "../../public/Logo";
import IconButton from "../IconButton";
import {
    IconContacts,
    IconHolidayVillage,
    IconLandscape,
    IconLocationCity,
    IconLogout,
    IconSpaceDashboard,
} from "./../../public/Icons";

function CollapsedBar() {
    const [activePage, setActivePage] = useState(1);

    return (
        <Navbar height={700} width={{ sm: 350 }} p="md">
            <Navbar.Section grow>
                <Group className={style.header} position="apart">
                    <Logo size="xs" theme="light" />
                    <Code sx={{ fontWeight: 700 }}>v1.0.1</Code>
                </Group>
                <IconButton
                    className={activePage == 1 ? "active" : "link"}
                    icon={<IconSpaceDashboard />}
                    label={"Dashboard"}
                    onClick={() => setActivePage(1)}
                />
                <IconButton
                    className={activePage == 2 ? "active" : "link"}
                    icon={<IconContacts />}
                    label={"Contacts"}
                    onClick={() => setActivePage(2)}
                />
                <IconButton
                    className={activePage == 3 ? "active" : "link"}
                    icon={<IconHolidayVillage />}
                    label={"Residential Properties"}
                    onClick={() => setActivePage(3)}
                />
                <IconButton
                    className={activePage == 4 ? "active" : "link"}
                    icon={<IconLandscape />}
                    label={"Land Properties"}
                    onClick={() => setActivePage(4)}
                />
                <IconButton
                    className={activePage == 5 ? "active" : "link"}
                    icon={<IconLocationCity />}
                    label={"Non-Residential Properties"}
                    onClick={() => setActivePage(5)}
                />
            </Navbar.Section>

            <Navbar.Section className={style.footer}>
                <IconButton icon={<IconLogout />} label={"Logout"} />
            </Navbar.Section>
        </Navbar>
    );
}

export default CollapsedBar;
