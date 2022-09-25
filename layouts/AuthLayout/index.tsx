import { 
  Anchor,
  Group,
  Container, 
  Paper, 
  Text,
  Divider,
  Title
} from '@mantine/core';

import {
  BasicHeader,
  BasicFooter,
  GoogleButton,
  IconButton,
  InputField,
  StyledButton
} from "../../components";
import { useToggle } from "@mantine/hooks";

import style from "./_index.module.scss";
import SeeRexIcon from '../../public/Logo';
import { useState } from 'react';
import ArrowBack from '../../public/Icons/ArrowBack';

export type AuthType = {
    type: 'login' | 'sign-up' | 'reset';
}

const AuthLayout = (props: AuthType) => {
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
      className={'back'}
      icon={<ArrowBack />}
      isFullWidth={false}
      label={'Back to login page'} 
      onClick={() => setIsForgotPass(false)}
    />
    <StyledButton types='submit'>RESET PASSWORD</StyledButton>
  </Group>;

  const renderSignInButtons =  type === 'login' && <Group position='center'>
    <StyledButton types='sign-in'>SIGN-IN</StyledButton>
    <StyledButton types='register' onClick={() => toggle()}>REGISTER</StyledButton>
  </Group>;
  
  const renderSignUpButton =  type === 'register' && 
    <StyledButton types='sign-up' onClick={() => toggle()}>SIGN-UP</StyledButton>;
  
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
      <BasicHeader opened={false} />
      <Container my={50}>
        <Paper withBorder shadow="md" p={35} mt={20} mb={30} radius="md" className={style.formContainer}>
          <Group position="center" mt="md" mb="xl">
            <SeeRexIcon />
          </Group>
          {renderForgotPasswordTitle}
          <InputField label={'Email'} placeholder={'lezzml.now@gmail.com'} />
          {renderDefaultView}
          {renderForgotPasswordForm}
        </Paper>
      </Container>
      <BasicFooter height={56} />
    </Paper>
  );
}

export default AuthLayout;
