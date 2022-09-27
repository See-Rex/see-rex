import { useForm } from '@mantine/form';
import {
  Group,
  Text,
  Title,
  Stack
} from '@mantine/core';
import style from "./_index.module.scss";
import {  InputField, StyledButton, IconButton } from '../../components';
import Link from 'next/link';
import { ArrowBack } from '../../public/Icons';
import AuthLayout from '../../layouts/AuthLayout';

export function ResetPassword() {
  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
    },
  });

  return (
    <AuthLayout isForgotPassword>
      <Group position='center' mb='md'> 
        <Stack>
          <Title size={20} align="center" className={style.forgotPassTitle}>
            Forgot your password?
          </Title>
          <Text color="dimmed" size="sm" align="center" mt={-10}>
            Enter your email address to get a reset password link.
          </Text>
        </Stack>
      </Group>
      <form onSubmit={form.onSubmit(() => {})}>
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
