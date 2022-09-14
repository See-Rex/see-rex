import type { NextPage } from "next";
import { MantineProvider } from '@mantine/core';
import styles from "../styles/_home.module.scss";
import {BasicHeader, TextField, PassField, StyledButton, LandingBanner} from "../components";

const Home: NextPage = () => {
    return (
        <MantineProvider>
            <BasicHeader>
                <StyledButton type='sign-in'>SIGN-IN</StyledButton>
                <StyledButton type='register'>REGISTER</StyledButton>
            </BasicHeader>
            <LandingBanner />
            <TextField label={'Email'} placeholder={'lezzml.now@gmail.com'} />
            <PassField placeholder={'Your password'} />
        </MantineProvider>
    );
};

export default Home;
