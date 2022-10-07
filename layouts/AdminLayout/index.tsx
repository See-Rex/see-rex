import { AppShell, BurgerProps, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { BasicHeader } from "../../components";
import CollapsedBar from "../../components/CollapsedBar";

import style from "./_index.module.scss";

type Props = {
  children: React.ReactNode;
  activePage: number;
  paginator: (page: number) => void;
};

function AdminLayout(props: BurgerProps & Props) {
  const { activePage, children, onClick, opened, paginator } = props;
  const { colorScheme } = useMantineColorScheme();

  return (
    <AppShell
      className={style[colorScheme]}
      header={<BasicHeader opened={opened} onClick={onClick} burger />}
      navbarOffsetBreakpoint="md"
      navbar={
        <CollapsedBar hidden={!opened} page={activePage} setPage={paginator} />
      }
      fixed
    >
      {children}
    </AppShell>
  );
}

export default AdminLayout;
