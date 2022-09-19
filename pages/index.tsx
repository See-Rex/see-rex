import { useState } from "react";
import type { NextPage } from "next";
import { MantineProvider, Button } from "@mantine/core";
import {
    BasicHeader,
    BasicFooter,
    IconButton,
    InputField,
    LandingBanner,
    StyledButton,
} from "../components";
import ResidentialIcon from "../public/residential.svg";
import Link from "next/link";

const Home: NextPage = () => {
    const [isLightTheme, setIsLightTheme] = useState(true);
    const theme = isLightTheme ? "light" : "dark";

    return (
        <MantineProvider>
            <LandingBanner />
            <BasicHeader theme={theme}>
                <StyledButton types="sign-in" theme={theme}>
                    SIGN-IN
                </StyledButton>
                <StyledButton types="register" theme={theme}>
                    REGISTER
                </StyledButton>
            </BasicHeader>
            <BasicHeader theme={theme}>
                <Link href="/"> Hello </Link>
                <Link href="/"> World </Link>
            </BasicHeader>
            <Button mb={50} onClick={() => setIsLightTheme(!isLightTheme)}>
                Change Theme
            </Button>
            <InputField label={"Email"} placeholder={"lezzml.now@gmail.com"} />
            <InputField placeholder={"Your password"} type="password" />
            <BasicFooter type={isLightTheme ? "light" : "dark"} />
            <IconButton
                iconSrc={ResidentialIcon}
                label={"Residential Properties"}
            />
        </MantineProvider>
    );
};

export default Home;
