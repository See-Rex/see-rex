import { Code, Group, Navbar } from "@mantine/core";
import style from "./_index.module.scss";
import React from "react";
import Logo from "../../public/Logo";
import IconButton from "../IconButton";
import {
    IconContacts,
    IconHolidayVillage,
    IconLogout,
    IconSpaceDashboard,
} from "./../../public/Icons";

function CollapsedBar() {
    return (
        <Navbar height={700} width={{ sm: 300 }} p="md">
            <Navbar.Section grow>
                <Group className={style.header} position="apart">
                    <Logo size="xs" theme="light" />
                    <Code sx={{ fontWeight: 700 }}>v1.0.1</Code>
                </Group>
                <IconButton
                    className="active"
                    icon={<IconSpaceDashboard />}
                    label={"Dashboard"}
                />
                <IconButton
                    className="link"
                    icon={<IconContacts />}
                    label={"Contacts"}
                />
                <IconButton
                    className="link"
                    icon={<IconHolidayVillage />}
                    label={"Residential Properties"}
                />
            </Navbar.Section>

            <Navbar.Section className={style.footer}>
                <IconButton
                    className="link"
                    icon={<IconLogout />}
                    label={"Logout"}
                />
            </Navbar.Section>
        </Navbar>
    );
}

export default CollapsedBar;
