import { 
  Anchor,
  Group,
  Container, 
  Paper, 
  Text,
  Divider,
} from '@mantine/core';
import { useToggle } from "@mantine/hooks";
import BasicFooter from "../BasicFooter";
import BasicHeader from "../BasicHeader";
import StyledButton from "../StyledButton";
import SeeRexIcon from '../../public/Icon';
import style from "./_index.module.scss";
import TextField from '../TextField';
import PassField from '../PassField';
import GoogleButton from '../GoogleButton';

type Props = {
  theme: 'light' | 'dark';
}

const AuthLayout = (props: Props) => {
  const { theme } = props;
  const [type, toggle] = useToggle(['login', 'register']);

  const renderForgotPassword = type === 'login' && <Group position="right" mt="md">
    <Anchor<'a'> 
      onClick={(event) => event.preventDefault()} 
      href="#" 
      size="sm"
      className={"forgotPass"}
      type="button"
    >
      Forgot password?
    </Anchor>
  </Group>;

  const renderSignInButtons =  type === 'login' && <Group position='center'>
    <StyledButton type='sign-in' theme={theme}>SIGN-IN</StyledButton>
    <StyledButton type='register' theme={theme} onClick={() => toggle()}>REGISTER</StyledButton>
  </Group>;
  
  const renderSignUpButton =  type === 'register' && 
    <StyledButton type='sign-up' theme={theme} onClick={() => toggle()}>SIGN-UP</StyledButton>;
  
  const renderConfirmPasswordField =  type === 'register' && 
    <PassField label={'Confirm Password'} placeholder={'Re-enter password'} />;

  return (
    <Paper className={style.container}>
      <BasicHeader type={"desktop"} theme={theme} />
      <Container my={50}>
        <Paper withBorder shadow="md" p={35} mt={30} radius="md" className={style.formContainer}>
          <Group position="center" mt="md" mb="xl">
            <SeeRexIcon/>
          </Group>
          <TextField label={'Email'} placeholder={'lezzml.now@gmail.com'} />
          <PassField label={'Password'} placeholder={'Your password'} />
          {renderConfirmPasswordField}
            <Group position='center' mb="md" mt="md">
              {renderSignInButtons}
              {renderSignUpButton}
            </Group>
            {renderForgotPassword}
            <Divider label="OR" labelPosition="center" my="lg" />
            <Group grow mb="md" mt="md">
              <GoogleButton radius="sm" className={style.google}>Continue with Google</GoogleButton>
            </Group>
            <Group position='center'>
              <Text className={style.text}>{type === 'register' && "Already have an account?"}</Text>
              <Anchor<'a'> 
                  onClick={() => toggle()}
                  href="#" 
                  size="sm"
                  className={"forgotPass"}
                  type="button"
                >
                  {type === 'register' && "Login"}
              </Anchor>
            </Group>
        </Paper>
      </Container>
      <BasicFooter type={theme} />
    </Paper>
  );
}

export default AuthLayout;
