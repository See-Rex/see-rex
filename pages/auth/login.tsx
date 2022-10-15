import { Anchor, Divider, Group, Stack, useMantineColorScheme } from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import { useRouter } from "next/router";
import {
    GoogleButton,
    InputField,
    StyledButton,
} from "../../components";
import SeeRexAlert from "../../components/SeeRexAlert";
import { useAuth } from "../../hooks/AuthContext";
import { AuthLayout } from "../../layouts/AuthLayout";
import style from "./_index.module.scss";

export function Login() {
    const { colorScheme } = useMantineColorScheme();
    const authContext = useAuth();
    const router = useRouter();
    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  async function handleLogin() {
    try {
        const signInWithEmailResponse = await authContext?.login(form.values.email, form.values.password);
  
        if (signInWithEmailResponse?.user.emailVerified) {
          SeeRexAlert({
            message: 'Successfully signed in.',
            title: 'Signed In',
            type: 'success',
          });
        } else if (!signInWithEmailResponse?.user.emailVerified) {
          SeeRexAlert({
            message: 'Your account has not been verified yet. Please check your email.',
            title: 'User Not Verified',
            type: 'error',
          });
          await authContext?.logout();
        }
      } catch (err) {
        SeeRexAlert({
            message: 'Invalid user credentials. ' + err.code,
            title: 'Sign In Failed',
            type: 'error',
        });
      }
  }

  if (authContext?.user?.emailVerified) {
    router.push('/auth');
  }

    return (
        <AuthLayout>
            <form onSubmit={form.onSubmit(handleLogin)}>
                <Stack spacing='md'>
                    <InputField
                        required
                        label={"Email"}
                        placeholder={"lezzml.now@gmail.com"}
                        error={form.errors.email && "Invalid email"}
                        value={form.values.email}
                        onChange={(event) =>
                            form.setFieldValue(
                                "email",
                                event.currentTarget.value,
                            )
                        }
                    />
                    <InputField
                        required
                        label={"Password"}
                        placeholder={"Your password"}
                        value={form.values.password}
                        onChange={(event) =>
                            form.setFieldValue(
                                "password",
                                event.currentTarget.value,
                            )
                        }
                        error={
                            form.errors.password &&
                            "Password should include at least 6 characters"
                        }
                        type="password"
                    />
                    <Group position="right">
                        <Link href="/auth/resetpassword">
                            <Anchor<"a">
                                size="sm"
                                className={style.forgotPass}
                                type="button"
                            >
                                Forgot password?
                            </Anchor>
                        </Link>
                    </Group>
                    <Group position="center">
                        <Group position="center">
                            <StyledButton types="sign-in">
                                SIGN-IN
                            </StyledButton>
                            <Link href="/auth/register">
                                <StyledButton types="register">
                                    REGISTER
                                </StyledButton>
                            </Link>
                        </Group>
                    </Group>
                    <Divider className={style.divider} label="OR" labelPosition="center" />
                    <Group grow>
                        <GoogleButton radius="sm" className={`${style.google} ${style[colorScheme]}`}>
                            Continue with Google
                        </GoogleButton>
                    </Group>
                </Stack>
            </form>
        </AuthLayout>
    );
}

export default Login;
