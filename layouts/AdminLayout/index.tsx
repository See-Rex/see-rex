import { AppShell, BurgerProps, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import { BasicHeader } from '../../components';
import CollapsedBar from '../../components/CollapsedBar';

import style from './_index.module.scss';

type Props = {
  children: React.ReactNode;
  activePage: number;
  paginator: (page: number) => void;
  setOpened: (page: boolean) => void;
};

function AdminLayout(props: BurgerProps & Props) {
  const { activePage, children, setOpened, opened, paginator } = props;
  const { colorScheme } = useMantineColorScheme();

  return (
    <AppShell
      className={style[colorScheme]}
      header={<BasicHeader opened={opened} onClick={() => setOpened(!opened)} burger />}
      navbarOffsetBreakpoint="md"
      navbar={<CollapsedBar setOpened={setOpened} hidden={!opened} page={activePage} setPage={paginator} />}
      fixed
    >
      {children}
    </AppShell>
  );
}

export default AdminLayout;
