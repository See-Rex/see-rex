import { 
  Anchor,
  Group,
  Container, 
  Paper, 
  Text,
  Divider,
  Title,
} from '@mantine/core';
import { useToggle } from "@mantine/hooks";
import BasicFooter from "../BasicFooter";
import StyledButton from "../StyledButton";
import style from "./_index.module.scss";
import InputField from '../InputField';
import GoogleButton from '../GoogleButton';
import SeeRexIcon from '../../public/Logo';
import BasicHeader from '../BasicHeader';
import { useState } from 'react';
import IconButton from '../IconButton';
import ArrowBack from '../../public/Icons/ArrowBack';

type Props = {
  theme: 'light' | 'dark';
}

const AuthLayout = (props: Props) => {
  const { theme } = props;
  const [type, toggle] = useToggle(['login', 'register']);
  const [isForgotPass, setIsForgotPass] = useState(false);

  const renderForgotPasswordTitle = isForgotPass && <Group position='center'> 
    <Title size={20} align="center" className={style.forgotPassTitle}>
      Forgot your password?
    </Title>
    <Text color="dimmed" size="sm" align="center" mt={-10}>
      Enter your email address to get a reset password link.
    </Text>
  </Group>

  const renderForgotPasswordAnchor = type === 'login' && <Group position="right" mt="md">
    <Anchor<'a'> 
      onClick={() => setIsForgotPass(true)}
      size="sm"
      className={style.forgotPass}
      type="button"
    >
      Forgot password?
    </Anchor>
  </Group>;

  const renderForgotPasswordForm = isForgotPass && <Group position="apart" mt="md">
    <IconButton 
      icon={<ArrowBack />} 
      label={'Back to login page'} 
      className={"backToLogin"}
      onClick={() => setIsForgotPass(false)}
    />
    <StyledButton types='submit' theme={theme}>RESET PASSWORD</StyledButton>
  </Group>;

  const renderSignInButtons =  type === 'login' && <Group position='center'>
    <StyledButton types='sign-in' theme={theme}>SIGN-IN</StyledButton>
    <StyledButton types='register' theme={theme} onClick={() => toggle()}>REGISTER</StyledButton>
  </Group>;
  
  const renderSignUpButton =  type === 'register' && 
    <StyledButton types='sign-up' theme={theme} onClick={() => toggle()}>SIGN-UP</StyledButton>;
  
  const renderConfirmPasswordField =  type === 'register' && 
    <InputField label={'Confirm Password'} placeholder={'Re-enter password'} />;

  const renderDefaultView = !isForgotPass && <>
    <InputField label={'Password'} placeholder={'Your password'} />
    {renderConfirmPasswordField}
      <Group position='center' mb="md" mt="md">
        {renderSignInButtons}
        {renderSignUpButton}
      </Group>
      {renderForgotPasswordAnchor}
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
            className={style.forgotPass}
            type="button"
          >
            {type === 'register' && "Login"}
        </Anchor>
      </Group>
  </>

  return (
    <Paper className={style.container}>
      <BasicHeader theme={theme}> </BasicHeader>
      <Container my={50}>
        <Paper withBorder shadow="md" p={35} mt={30} radius="md" className={style.formContainer}>
          <Group position="center" mt="md" mb="xl">
            <SeeRexIcon theme={theme} />
          </Group>
          {renderForgotPasswordTitle}
          <InputField label={'Email'} placeholder={'lezzml.now@gmail.com'} />
          {renderDefaultView}
          {renderForgotPasswordForm}
        </Paper>
      </Container>
      <BasicFooter type={theme} />
    </Paper>
  );
}

export default AuthLayout;
