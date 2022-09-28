import { Paper, Group, Container } from "@mantine/core";
import style from "./_index.module.scss";
import {
    BasicHeader,
    BasicFooter,
} from "../../components";
import SeeRexIcon from "../../public/Logo";
import React from "react";

type Props = {
    children: React.ReactNode;
    isForgotPassword?: boolean;
}

export function AuthLayout(props: Props) {
    const { children, isForgotPassword } = props;

    return (
        <div className={style.pageContainer}>
            <BasicHeader opened={false} />
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
            <BasicFooter height={56} />
        </div>
    );
}

export default AuthLayout;
