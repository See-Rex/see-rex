import { AppShell, BurgerProps, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { BasicHeader, StoryBar } from "../../components";
import style from "./_index.module.scss";

import ColorToggle from "./../../components/ColorToggle/index";

type Props = {
  children: React.ReactNode;
  activePage: number;
  paginator: (val: number) => void;
};

function StoryLayout(props: BurgerProps & Props) {
  const { colorScheme } = useMantineColorScheme();
  const { activePage, children, onClick, opened, paginator } = props;

  return (
    <AppShell
      className={style[colorScheme]}
      header={<BasicHeader opened={opened} onClick={onClick} burger />}
      navbar={
        <StoryBar hidden={!opened} page={activePage} setPage={paginator} />
      }
      fixed
    >
      {children}
    </AppShell>
  );
}

export default StoryLayout;
