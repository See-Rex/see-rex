import { Header, Group, Burger, Container } from "@mantine/core";
import style from "./_index.module.scss";
import Logo from "../../public/Logo";

type Props = {
    children: React.ReactNode;
    theme: "light" | "dark";
};

const BasicHeader = (props: Props) => {
    const { children, theme } = props;

    return (
        <Header height={56} mb={50} className={style[theme]}>
            <Container>
                <div className={style.inner}>
                    <Logo size="lg" theme={theme} />
                    <Group spacing={20} className={style.links}>
                        {children}
                    </Group>
                    <Burger
                        opened={false}
                        color={theme === "light" ? "black" : "white"}
                        className={style.autohide}
                    />
                </div>
            </Container>
        </Header>
    );
};

export default BasicHeader;
