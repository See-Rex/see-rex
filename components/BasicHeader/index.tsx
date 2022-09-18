import { Header, Group, Burger, Container } from '@mantine/core';
import StyledButton from '../StyledButton';
import SeeRexIcon from '../../public/Icon';
import style from "./_index.module.scss";

type Props = {
  type: 'withButtons' | 'desktop' | 'mobile';
  theme: 'light' | 'dark';
}

const BasicHeader = (props: Props) => {
  const { type, theme } = props;

  //seerex logo needs to be changed when in dark mode
  if (type === 'withButtons') {
    return <Header height={56} mb={20} className={style[theme]}>
    <Container>
      <div className={`${style.inner}`}>
        <SeeRexIcon/>
        <Group spacing={5} className={style.links}>
          <StyledButton type='sign-in' theme={theme}>SIGN-IN</StyledButton>
          <StyledButton type='register' theme={theme}>REGISTER</StyledButton>
        </Group>
      </div>
    </Container>
  </Header>;
  } else if (type === 'desktop') {
    return <Header height={56} mb={20} className={`${style.inner} ${style[theme]}`}> <SeeRexIcon/></Header>;
  }

  return <Header height={56} mb={20} className={`${style.inner} ${style[theme]}`}>
      <SeeRexIcon/>
      <Burger opened={false} color={theme === 'light'? 'black':'white'} />
    </Header>;
}

export default BasicHeader;
