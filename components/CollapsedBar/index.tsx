import { Code, Group, Navbar } from "@mantine/core";
import style from "./_index.module.scss";
import React from "react";
import Logo from "../../public/Logo";
import {
    IconLogout,
    IconLayoutDashboard,
    IconAddressBook,
    IconBuildingCommunity,
} from "@tabler/icons";
import IconButton from "../IconButton";

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
                    icon={<IconLayoutDashboard />}
                    label={"Dashboard"}
                />
                <IconButton
                    className="link"
                    icon={<IconAddressBook />}
                    label={"Contacts"}
                />
                <IconButton
                    className="link"
                    icon={<IconBuildingCommunity />}
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
