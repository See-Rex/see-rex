import {
    Navbar,
    NavbarProps,
    ScrollArea,
    useMantineColorScheme,
} from "@mantine/core";
import style from "./_index.module.scss";
import React from "react";
import IconButton from "../IconButton";
import {
    IconContacts,
    IconHolidayVillage,
    IconLandscape,
    IconLocationCity,
    IconLogout,
    IconSpaceDashboard,
} from "./../../public/Icons";

type Props = {
    page: number;
    setPage: Function;
};

function CollapsedBar(props: Omit<NavbarProps, "children"> & Props) {
    const { colorScheme } = useMantineColorScheme();

    const { hidden, page, setPage } = props;

    return (
        <Navbar
            hidden={hidden}
            width={{ sm: 350 }}
            p="md"
            className={style[colorScheme]}
        >
            <Navbar.Section grow component={ScrollArea}>
                <IconButton
                    className={page == 1 ? "active" : "link"}
                    icon={<IconSpaceDashboard />}
                    label={"Dashboard"}
                    onClick={() => setPage(1)}
                    isFullWidth
                />
                <IconButton
                    className={page == 2 ? "active" : "link"}
                    icon={<IconContacts />}
                    label={"Contacts"}
                    onClick={() => setPage(2)}
                    isFullWidth
                />
                <IconButton
                    className={page == 3 ? "active" : "link"}
                    icon={<IconHolidayVillage />}
                    label={"Residential Properties"}
                    onClick={() => setPage(3)}
                    isFullWidth
                />
                <IconButton
                    className={page == 4 ? "active" : "link"}
                    icon={<IconLandscape />}
                    label={"Land Properties"}
                    onClick={() => setPage(4)}
                    isFullWidth
                />
                <IconButton
                    className={page == 5 ? "active" : "link"}
                    icon={<IconLocationCity />}
                    label={"Non-Residential Properties"}
                    onClick={() => setPage(5)}
                    isFullWidth
                />
            </Navbar.Section>
            <Navbar.Section className={style.footer}>
                <IconButton
                    className="link"
                    icon={<IconLogout />}
                    label={"Logout"}
                    isFullWidth
                />
            </Navbar.Section>
        </Navbar>
    );
}

export default CollapsedBar;
