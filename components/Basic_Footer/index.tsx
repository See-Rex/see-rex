import { Footer } from '@mantine/core';
import style from "./_index.module.scss";

type Props = {
  type: string;
}

const Basic_Footer = (props: Props) => {
  const { type } = props;

  return (
      <Footer className={`${style[type]} ${style['basic_footer']}`} height={56} mb={120}>All right reserved Ⓒ SeeRex Inc. 2022</Footer>
  );
}

export default Basic_Footer;
