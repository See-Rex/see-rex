import {
  Group,
  Stack,
  Text,
  Title,
  useMantineColorScheme
} from '@mantine/core';
import { useForm } from '@mantine/form';
import Link from 'next/link';
import {  IconButton, InputField, StyledButton } from '../../components';
import { useAuth } from '../../context/AuthContext';
import AuthLayout from '../../layouts/AuthLayout';
import { ArrowBack } from '../../public/Icons';
import style from "./_index.module.scss";

export function ResetPassword() {
  const { colorScheme } = useMantineColorScheme();
  const { reset } = useAuth();

  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
    },
  });

  const handleReset = async () => {
    try {
        await reset(form.values.email);
        alert("A password reset email has been sent to your email address!");
    } catch (err) {
        alert(err);
    }
  };

  return (
    <AuthLayout isForgotPassword>
      <Group position='center' mb='md'> 
        <Stack>
          <Title size={20} align="center" className={`${style.forgotPassTitle} ${style[colorScheme]}`}>
            Forgot your password?
          </Title>
          <Text color="dimmed" size="sm" align="center" mt={-10}>
            Enter your email address to get a reset password link.
          </Text>
        </Stack>
      </Group>
      <form onSubmit={form.onSubmit(handleReset)}>
        <Stack spacing='md'>
          <InputField 
            required
            label={'Email'} 
            placeholder={'lezzml.now@gmail.com'}
            error={form.errors.email && 'Invalid email'}
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
          />
          <Group position="apart" className={style.resetButtonGroup}>
            <Link href="/auth/login">
              <IconButton 
                className={'back'}
                icon={<ArrowBack />}
                isFullWidth={false}
                label={'Back to login page'}
              />
            </Link>
            <StyledButton types='submit'>RESET PASSWORD</StyledButton>
          </Group>
        </Stack>
      </form>
    </AuthLayout>
  );
}

export default ResetPassword;
