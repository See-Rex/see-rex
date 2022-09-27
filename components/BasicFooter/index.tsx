import { Footer, FooterProps, useMantineColorScheme } from "@mantine/core";
import style from "./_index.module.scss";

const BasicFooter = (props: Omit<FooterProps, "children">) => {
    const { colorScheme } = useMantineColorScheme();
    const { height, p } = props;

    return (
        <Footer
            className={`${style[colorScheme]} ${style["basic_footer"]}`}
            height={height}
            p={p}
            mt={50}
        >
            All right reserved Ⓒ SeeRex Inc. 2022
        </Footer>
    );
};

export default BasicFooter;
