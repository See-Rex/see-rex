import { createStyles, Header, Menu, Group, Center, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons';
import Image from 'next/image';
import Icon from '../Icon';
import style from "./_index.module.scss";

const Basic_Header = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Header height={56} mb={120}>
      <Container>
        <div className={style.inner}>
          <Icon/>
          {/* <MantineLogo size={28} /> */}
          <Group spacing={5} className={style.links}>
          </Group>
          <Burger opened={opened} onClick={toggle} className={style.burger} size="sm" />
        </div>
      </Container>
    </Header>
  );
}

export default Basic_Header;