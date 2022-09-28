import { useForm } from "@mantine/form";
import { Group, Divider, Anchor, Stack } from "@mantine/core";
import style from "./_index.module.scss";
import {
    InputField,
    StyledButton,
    GoogleButton,
} from "../../components";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { AuthLayout } from "../../layouts/AuthLayout";
import { useRouter } from "next/router";

export function Login() {
    const { login } = useAuth();
    const router = useRouter();
    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
            password: (val) =>
                val.length <= 6
                    ? "Password should include at least 6 characters"
                    : null,
        },
    });

    const handleLogin = async () => {
        try {
            await login(form.values.email, form.values.password);
            router.push("/dashboard");
        } catch (err) {
            alert(err);
        }
    };

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
                        <Anchor<"a">
                            href="/auth/resetpassword"
                            size="sm"
                            className={style.forgotPass}
                            type="button"
                        >
                            Forgot password?
                        </Anchor>
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
                    <Divider label="OR" labelPosition="center" />
                    <Group grow>
                        <GoogleButton radius="sm" className={style.google}>
                            Continue with Google
                        </GoogleButton>
                    </Group>
                </Stack>
            </form>
        </AuthLayout>
    );
}

export default Login;
