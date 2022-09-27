import { useForm } from "@mantine/form";
import { Group, Divider, Anchor, Text, Stack } from "@mantine/core";
import style from "./_index.module.scss";
import {
    InputField,
    StyledButton,
    GoogleButton,
} from "../../components";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import { useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";

function Register() {
    const { register } = useAuth();
    const router = useRouter();
    const [password, setPassword] = useState("");

    const form = useForm({
        initialValues: {
            email: "",
            password: "",
            cpassword: "",
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
            password: (val) =>
                val.length <= 6
                    ? "Password should include at least 6 characters"
                    : null,
            cpassword: (val) =>
                val !== password
                    ? "Please re-enter the correct password"
                    : null,
        },
    });

    const handleRegister = async () => {
        try {
            await register(form.values.email, form.values.password);
            alert("You have successfully signed up!");
            router.push("/auth/login");
        } catch (err) {
            alert(err);
        }
    };

    return (
        <AuthLayout>
            <form onSubmit={form.onSubmit(handleRegister)}>
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
                        type="password"
                        value={form.values.password}
                        onChange={(event) => {
                            form.setFieldValue(
                                "password",
                                event.currentTarget.value,
                            );
                            setPassword(event.currentTarget.value);
                        }}
                        error={
                            form.errors.password &&
                            "Password should include at least 6 characters"
                        }
                    />
                    <InputField
                        required
                        label={"Confirm Password"}
                        placeholder={"Re-enter password"}
                        type="password"
                        value={form.values.cpassword}
                        onChange={(event) =>
                            form.setFieldValue(
                                "cpassword",
                                event.currentTarget.value,
                            )
                        }
                        error={form.errors.cpassword}
                    />
                    <Group position="center">
                        <StyledButton types="sign-up">SIGN-UP</StyledButton>
                    </Group>
                    <Divider label="OR" labelPosition="center"/>
                    <Group grow>
                        <GoogleButton radius="sm" className={style.google}>
                            Continue with Google
                        </GoogleButton>
                    </Group>
                    <Group position="center">
                        <Text className={style.text}>
                            Already have an account?
                        </Text>
                        <Link href="/auth/login">
                            <Anchor<"a">
                                onClick={() => {}}
                                href="#"
                                size="sm"
                                className={style.forgotPass}
                                type="button"
                            >
                                Login
                            </Anchor>
                        </Link>
                    </Group>
                </Stack>
            </form>
        </AuthLayout>
    );
}

export default Register;
