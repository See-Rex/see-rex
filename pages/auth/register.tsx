import { useForm } from "@mantine/form";
import { Paper, Group, Divider, Anchor, Container, Text } from "@mantine/core";
import style from "./_index.module.scss";
import {
    BasicHeader,
    InputField,
    StyledButton,
    GoogleButton,
    BasicFooter,
} from "../../components";
import SeeRexIcon from "../../public/Logo";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import { useState } from "react";

function Register() {
    const { user, register } = useAuth();
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
            router.push("/dashboard");
        } catch (err) {
            alert(err);
        }
    };

    if (user) {
        router.push("/dashboard");
    }

    return (
        <Paper className={style.container}>
            <BasicHeader opened={false} />
            <Container my={50}>
                <Paper
                    withBorder
                    shadow="md"
                    p={35}
                    mt={20}
                    mb={30}
                    radius="md"
                    className={style.formContainer}
                >
                    <Group position="center" mt="md" mb="xl">
                        <SeeRexIcon />
                    </Group>
                    <form onSubmit={form.onSubmit(handleRegister)}>
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
                        <Group position="center" mb="md" mt="md">
                            <StyledButton types="sign-up">SIGN-UP</StyledButton>
                        </Group>
                        <Divider label="OR" labelPosition="center" my="lg" />
                        <Group grow mb="md" mt="md">
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
                    </form>
                </Paper>
            </Container>
            <BasicFooter height={56} />
        </Paper>
    );
}

export default Register;
