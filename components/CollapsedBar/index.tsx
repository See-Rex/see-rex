import { SegmentedToggle } from '..';
import { Drawer, MediaQuery, Navbar, NavbarProps, ScrollArea, useMantineColorScheme } from '@mantine/core';
import { useRouter } from 'next/router';
import React from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../../hooks/AuthContext';
import IconButton from '../IconButton';
import style from './_index.module.scss';
import {
  IconContacts,
  IconHolidayVillage,
  IconLandscape,
  IconLocationCity,
  IconLogout,
  IconSpaceDashboard,
} from './../../public/Icons';

type Props = {
  page: number;
  setPage: (val: number) => void;
  setOpened: (val: boolean) => void;
};

function CollapsedBar(props: Omit<NavbarProps, 'children'> & Props) {
  const authContext = useAuth();
  const router = useRouter();
  const { colorScheme } = useMantineColorScheme();

  const { hidden, page, setOpened, setPage } = props;

  function handleLogout() {
    authContext?.logout();
    router.push('/auth');
    toast('Farewell! See you next time.');
  }

  return (
    <>
      <MediaQuery largerThan="md" styles={{ display: 'none' }}>
        <Drawer opened={!hidden} onClose={() => setOpened(false)} size={350} padding="md" className={style[colorScheme]}>
          <IconButton
            className={page == 1 ? 'active' : 'link'}
            icon={<IconSpaceDashboard />}
            label={'Dashboard'}
            onClick={() => {
              setPage(1);
              setOpened(false);
            }}
            isFullWidth
          />
          <IconButton
            className={page == 2 ? 'active' : 'link'}
            icon={<IconContacts />}
            label={'Contacts'}
            onClick={() => {
              setPage(2);
              setOpened(false);
            }}
            isFullWidth
          />
          <IconButton
            className={page == 3 ? 'active' : 'link'}
            icon={<IconHolidayVillage />}
            label={'Residential Properties'}
            onClick={() => {
              setPage(3);
              setOpened(false);
            }}
            isFullWidth
          />
          <IconButton
            className={page == 4 ? 'active' : 'link'}
            icon={<IconLandscape />}
            label={'Land Properties'}
            onClick={() => {
              setPage(4);
              setOpened(false);
            }}
            isFullWidth
          />
          <IconButton
            className={page == 5 ? 'active' : 'link'}
            icon={<IconLocationCity />}
            label={'Non-Residential Properties'}
            onClick={() => {
              setPage(5);
              setOpened(false);
            }}
            isFullWidth
          />
          <div className={style.bottom}>
            <SegmentedToggle />
            <div className={style.footer}>
              <IconButton
                className="link"
                icon={<IconLogout />}
                label={'Logout'}
                onClick={() => {
                  setOpened(false);
                  handleLogout();
                }}
                isFullWidth
              />
            </div>
          </div>
        </Drawer>
      </MediaQuery>
      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <Navbar hidden={hidden} width={{ sm: 350 }} p="md" className={style[colorScheme]}>
          <Navbar.Section grow component={ScrollArea}>
            <IconButton
              className={page == 1 ? 'active' : 'link'}
              icon={<IconSpaceDashboard />}
              label={'Dashboard'}
              onClick={() => {
                setPage(1);
              }}
              isFullWidth
            />
            <IconButton
              className={page == 2 ? 'active' : 'link'}
              icon={<IconContacts />}
              label={'Contacts'}
              onClick={() => setPage(2)}
              isFullWidth
            />
            <IconButton
              className={page == 3 ? 'active' : 'link'}
              icon={<IconHolidayVillage />}
              label={'Residential Properties'}
              onClick={() => setPage(3)}
              isFullWidth
            />
            <IconButton
              className={page == 4 ? 'active' : 'link'}
              icon={<IconLandscape />}
              label={'Land Properties'}
              onClick={() => setPage(4)}
              isFullWidth
            />
            <IconButton
              className={page == 5 ? 'active' : 'link'}
              icon={<IconLocationCity />}
              label={'Non-Residential Properties'}
              onClick={() => setPage(5)}
              isFullWidth
            />
          </Navbar.Section>
          <SegmentedToggle />
          <Navbar.Section className={style.footer}>
            <IconButton
              className="link"
              icon={<IconLogout />}
              label={'Logout'}
              onClick={handleLogout}
              isFullWidth
            />
          </Navbar.Section>
        </Navbar>
      </MediaQuery>
    </>
  );
}

export default CollapsedBar;
