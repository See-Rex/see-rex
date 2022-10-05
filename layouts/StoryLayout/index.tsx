import { AppShell, BurgerProps, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { BasicHeader } from "../../components";
import { StoryBar } from "../../components";
import ColorToggle from "./../../components/ColorToggle/index";

import style from "./_index.module.scss";

type Props = {
  children: React.ReactNode;
  activePage: number;
  paginator: Function;
};

function StoryLayout(props: BurgerProps & Props) {
  const { colorScheme } = useMantineColorScheme();
  const { children, activePage, paginator, opened, onClick } = props;

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
