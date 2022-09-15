import { Header, Group, Container } from '@mantine/core';
import Icon from '../../public/Icon';
import style from "./_index.module.scss";

type Props = {
  children: React.ReactNode;
  theme?: "light" | "dark";
} 

const BasicHeader = (props: Props) => {
  const {children, theme} = props;

  return (
    <Header height={56} mb={120}>
      <Container>
        <div className={style.inner}>
          <Icon/>
          <Group spacing={20} className={style.links}>
            {children}
          </Group>
        </div>
      </Container>
    </Header>
  );
}

export default BasicHeader;