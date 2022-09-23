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
    AuthLayout,
} from "../components";
import IconHolidayVillage from "./../public/Icons/IconHolidayVillage";
import CollapsedBar from "../components/CollapsedBar";

const Home: NextPage = () => {
    const [isLightTheme, setIsLightTheme] = useState(true);
    const theme = isLightTheme ? "light" : "dark";

    return (
        <MantineProvider>
            <AuthLayout theme={theme}  />
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
                <StyledButton types="navigation" theme={theme}>
                    Sign-in
                </StyledButton>
                <StyledButton types="navigation" theme={theme}>
                    Register
                </StyledButton>
            </BasicHeader>
            <Button mb={50} onClick={() => setIsLightTheme(!isLightTheme)}>
                Change Theme
            </Button>
            <InputField label={"Email"} placeholder={"lezzml.now@gmail.com"} />
            <InputField placeholder={"Your password"} type="password" />
            <BasicFooter type={isLightTheme ? "light" : "dark"} />
            <IconButton
                className="link"
                icon={<IconHolidayVillage />}
                label={"Link Inactive"}
            />
            <IconButton
                className="active"
                icon={<IconHolidayVillage />}
                label={"Link Active"}
            />
            <CollapsedBar />
            <BasicFooter type={theme} />
        </MantineProvider>
    );
};

export default Home;
