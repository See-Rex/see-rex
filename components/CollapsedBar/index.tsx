import { Code, Group, Navbar } from "@mantine/core";
import style from "./_index.module.scss";
import React from "react";
import Icon from "./../../public/Icon/index";
import { IconLogout, IconSwitchHorizontal } from "@tabler/icons";

function CollapsedBar() {
    return (
        <Navbar height={700} width={{ sm: 300 }} p="md">
            <Navbar.Section grow>
                <Group className={style.header} position="apart">
                    <Icon size="xs" theme="light" />
                    <Code sx={{ fontWeight: 700 }}>v1.0.1</Code>
                </Group>
            </Navbar.Section>

            <Navbar.Section className={style.footer}>
                <a
                    href="#"
                    className={style.link}
                    onClick={(event) => event.preventDefault()}
                >
                    <IconSwitchHorizontal
                        className={style.linkIcon}
                        stroke={1.5}
                    />
                    <span>Change account</span>
                </a>

                <a
                    href="#"
                    className={style.link}
                    onClick={(event) => event.preventDefault()}
                >
                    <IconLogout className={style.linkIcon} stroke={1.5} />
                    <span>Logout</span>
                </a>
            </Navbar.Section>
        </Navbar>
    );
}

export default CollapsedBar;
