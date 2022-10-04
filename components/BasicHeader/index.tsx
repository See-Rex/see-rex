import {
  Burger,
  BurgerProps,
  Code,
  Container,
  Group,
  Header,
  MediaQuery,
  useMantineColorScheme,
} from "@mantine/core";
import Logo from "../../public/Logo";
import style from "./_index.module.scss";

type Props = {
  children?: React.ReactNode;
  burger?: boolean;
};

const BasicHeader = (props: BurgerProps & Props) => {
  const { colorScheme } = useMantineColorScheme();
  const { burger, children, onClick, opened } = props;

  return (
    <Header height={56} mb={50} className={style[colorScheme]}>
      <Container fluid={!children}>
        <div className={style.inner}>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              color={colorScheme=="light"?"black":"white"}
              hidden={!burger}
              opened={opened}
              onClick={onClick}
              size="sm"
              mr="xl"
            />
          </MediaQuery>
          <Logo size="lg" />
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Group spacing={20} className={style.links}>
              {children}
            </Group>
          </MediaQuery>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Code
              className={style[`${colorScheme}-code`]}
              sx={{ fontWeight: 700 }}
            >
              v1.0.1
            </Code>
          </MediaQuery>
        </div>
      </Container>
    </Header>
  );
};

export default BasicHeader;
