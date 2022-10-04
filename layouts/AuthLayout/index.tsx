import { AppShell, Container, Group, Paper } from "@mantine/core";
import React from "react";
import {
    BasicFooter,
    BasicHeader,
} from "../../components";
import SeeRexIcon from "../../public/Logo";
import style from "./_index.module.scss";

type Props = {
    children: React.ReactNode;
    isForgotPassword?: boolean;
}

export function AuthLayout(props: Props) {
    const { children, isForgotPassword } = props;

    return (
        <AppShell
            header={<BasicHeader opened={false} />}
            footer={<BasicFooter height={56} />}
            fixed
        >
            <div className={style.pageContainer}>
                <Container>
                    <Paper
                        withBorder
                        shadow="md"
                        radius="md"
                        className={ isForgotPassword ? style.forgotContainer : style.formContainer}
                        p='xl'
                        m='xl'
                    >
                            <Group position="center" my='sm'>
                                <SeeRexIcon />
                            </Group>
                            {children}
                    </Paper>
                </Container>
            </div>
        </AppShell>
    );
}

export default AuthLayout;
