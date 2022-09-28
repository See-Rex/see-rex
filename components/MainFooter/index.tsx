import { Footer, FooterProps, useMantineColorScheme } from "@mantine/core";
import Logo from "../../public/Logo";
import style from "./_index.module.scss";

const MainFooter = (props: Omit<FooterProps, "children">) => {
  const { colorScheme } = useMantineColorScheme();
  const { height, p } = props;

  return (
    <Footer className={`${style["main_footer"]}`} height={height} p={p} mt={50}>
      <div className={`${style.circle} ${style[colorScheme]}`} />
      <Logo size="lg" />
      <p className={`${style[colorScheme]}`}>
        All right reserved Ⓒ SeeRex Inc. 2022
      </p>
    </Footer>
  );
};

export default MainFooter;
