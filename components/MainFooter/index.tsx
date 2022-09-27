import { Container, Footer, FooterProps, Group, useMantineColorScheme } from "@mantine/core";
import Logo from "../../public/Logo";
import style from "./_index.module.scss";

const MainFooter = (props: Omit<FooterProps, "children">) => {
    const { colorScheme } = useMantineColorScheme();
    const { height, p } = props;

    return (
        <Footer
            className={`${style[colorScheme]} ${style["main_footer"]}`}
            height={height}
            p={p}
            mt={50}
        >
            <div className={style.circle} />
            <Logo size="lg" />
            <p>All right reserved Ⓒ SeeRex Inc. 2022</p>
        </Footer>
    );
};

export default MainFooter;
