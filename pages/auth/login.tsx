import { useForm } from '@mantine/form';
import {
  Paper,
  Group,
  Divider,
  Anchor,
  Container
} from '@mantine/core';
import style from "./_index.module.scss";
import { BasicHeader, InputField, StyledButton, GoogleButton, BasicFooter } from '../../components';
import SeeRexIcon from '../../public/Logo';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';

export function Login() {
  const { user, login } = useAuth();
  const router = useRouter();
  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const handleLogin = async () => {
    try {
      await login(form.values.email, form.values.password);
      alert('You have successfully logged in!');
      router.push('/dashboard');
    } catch (err) {
      alert(err);
    }
  }

  if (user) {
    router.push('/dashboard');
  }

  return (
    <Paper className={style.container}>
      <BasicHeader opened={false} />
      <Container my={50}>
        <Paper withBorder shadow="md" p={35} mt={20} mb={30} radius="md" className={style.formContainer}>
          <Group position="center" mt="md" mb="xl">
            <SeeRexIcon />
          </Group>
          <form onSubmit={form.onSubmit(handleLogin)}>
            <InputField 
              required
              label={'Email'} 
              placeholder={'lezzml.now@gmail.com'}
              error={form.errors.email && 'Invalid email'}
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            />
            <InputField 
              required 
              label={'Password'} 
              placeholder={'Your password'}
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
            />
              <Group position='center' mb="md" mt="md">
                <Group position='center'>
                  <StyledButton types='sign-in'>SIGN-IN</StyledButton>
                  <Link href="/auth/register">
                    <StyledButton types="register">REGISTER</StyledButton>
                  </Link>
                </Group>
              </Group>
              <Group position="right" mt="md">
                <Anchor<'a'> 
                  href="/auth/resetpassword"
                  size="sm"
                  className={style.forgotPass}
                  type="button"
                >
                  Forgot password?
                </Anchor>
              </Group>
              <Divider label="OR" labelPosition="center" my="lg" />
              <Group grow mb="md" mt="md">
                <GoogleButton radius="sm" className={style.google}>Continue with Google</GoogleButton>
              </Group>
            </form>
        </Paper>
      </Container>
      <BasicFooter height={56} />
    </Paper>
  );
}

export default Login
