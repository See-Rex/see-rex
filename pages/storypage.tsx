import { Button, useMantineColorScheme } from "@mantine/core";
import React from "react";
import {
    BasicFooter,
    BasicHeader,
    CollapsedBar,
    IconButton,
    InputField,
    LandingBanner,
    StyledButton,
} from "../components";
import { IconHolidayVillage } from "../public/Icons";

function StoryPage() {
    const { toggleColorScheme } = useMantineColorScheme();
    return (
        <>
            <LandingBanner />
            <BasicHeader opened={false}>
                <StyledButton types="sign-in">SIGN-IN</StyledButton>
                <StyledButton types="register">REGISTER</StyledButton>
            </BasicHeader>
            <BasicHeader opened={false}>
                <StyledButton types="navigation">Sign-in</StyledButton>
                <StyledButton types="navigation">Register</StyledButton>
            </BasicHeader>
            <Button mb={50} onClick={() => toggleColorScheme()}>
                Change Theme
            </Button>
            <InputField label={"Email"} placeholder={"lezzml.now@gmail.com"} />
            <InputField placeholder={"Your password"} type="password" />
            <BasicFooter height={56} />
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
        </>
    );
}

export default StoryPage;
