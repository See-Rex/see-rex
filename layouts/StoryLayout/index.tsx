import { AppShell, BurgerProps, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import { BasicHeader, StoryBar } from '../../components';
import style from './_index.module.scss';

type Props = {
  children: React.ReactNode;
  activePage: number;
  paginator: (val: number) => void;
  setOpened: (val: boolean) => void;
};

function StoryLayout(props: BurgerProps & Props) {
  const { colorScheme } = useMantineColorScheme();
  const { activePage, children, onClick, opened, paginator, setOpened } = props;

  return (
    <AppShell
      className={style[colorScheme]}
      header={<BasicHeader opened={opened} onClick={onClick} burger />}
      navbar={<StoryBar hidden={!opened} page={activePage} setOpened={setOpened} setPage={paginator} />}
      navbarOffsetBreakpoint="md"
      fixed
    >
      {children}
    </AppShell>
  );
}

export default StoryLayout;
