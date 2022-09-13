import { Header, Group, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Styled_Button from '../Styled_Button';
import Icon from '../Icon';
import style from "./_index.module.scss";

const Basic_Header = () => {
  return (
    <Header height={56} mb={120}>
      <Container>
        <div className={style.inner}>
          <Icon/>
          <Group spacing={5} className={style.links}>
            <Styled_Button types='sign-in'>Sign-in</Styled_Button>
            <Styled_Button types='register'>Register</Styled_Button>
          </Group>
        </div>
      </Container>
    </Header>
  );
}

export default Basic_Header;