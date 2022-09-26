import { useForm } from '@mantine/form';
import {
  Paper,
  Group,
  Container,
  Text,
  Title
} from '@mantine/core';
import style from "./_index.module.scss";
import { BasicHeader, InputField, StyledButton, IconButton, BasicFooter } from '../../components';
import SeeRexIcon from '../../public/Logo';
import Link from 'next/link';
import { ArrowBack } from '../../public/Icons';

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
    <Paper className={style.container}>
      <BasicHeader opened={false} />
      <Container my={50}>
        <Paper withBorder shadow="md" p={35} mt={20} mb={30} radius="md" className={style.formContainer}>
          <Group position="center" mt="md" mb="xl">
            <SeeRexIcon />
          </Group>
          <Group position='center'> 
            <Title size={20} align="center" className={style.forgotPassTitle}>
              Forgot your password?
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={-10}>
              Enter your email address to get a reset password link.
            </Text>
          </Group>
          <form onSubmit={form.onSubmit(() => {})}>
            <InputField 
              required
              label={'Email'} 
              placeholder={'lezzml.now@gmail.com'}
              error={form.errors.email && 'Invalid email'}
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            />
            <Group position="apart" mt="md">
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
          </form>
        </Paper>
      </Container>
      <BasicFooter height={56} />
    </Paper>
  );
}

export default ResetPassword
