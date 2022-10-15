import { AppShell, useMantineColorScheme } from "@mantine/core";
import React from "react";
import PageHeader from "../../components/PageHeader";
import style from "./_index.module.scss";

type Props = {
    children: React.ReactNode;
}

export function SeeRexPageLayout(props: Props) {
    const { children } = props;
    const { colorScheme } = useMantineColorScheme();

    return (
        <AppShell
            className={style[colorScheme]}
            header={<PageHeader opened={false} />}
            fixed
        >
            {children}
        </AppShell>
    );
}

export default SeeRexPageLayout;
