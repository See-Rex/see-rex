import { useState } from "react";
import type { NextPage } from "next";
import { MantineProvider, Button, Group } from '@mantine/core';

import {BasicHeader, TextField, PassField, LandingBanner, AuthLayout} from "../components";
import BasicFooter from "../components/BasicFooter";
import IconButton from "../components/IconButton";
import ResidentialIcon from "../public/residential.svg";
import StyledButton from "../components/StyledButton";

const Home: NextPage = () => {
    const [isLightTheme, setIsLightTheme] = useState(true);

    return (
        <MantineProvider>
            <LandingBanner />
            <BasicHeader type="withButtons" theme={isLightTheme? 'light':'dark'} />
            <BasicHeader type="desktop" theme={isLightTheme? 'light':'dark'} />
            <BasicHeader type="mobile" theme={isLightTheme? 'light':'dark'} />
            <Button mb={50} onClick={()=>setIsLightTheme(!isLightTheme)}>Change Theme</Button>
            
            <TextField label={'Email'} placeholder={'lezzml.now@gmail.com'} />
            <PassField placeholder={'Your password'} />
            <StyledButton type='sign-up' theme={isLightTheme? 'light':'dark'}>SIGN-UP</StyledButton>
            <StyledButton type='submit' theme={isLightTheme? 'light':'dark'}>RESET PASSWORD</StyledButton>
            <StyledButton type='card' theme={isLightTheme? 'light':'dark'}>Show Details</StyledButton>
            <StyledButton type='banner' theme={isLightTheme? 'light':'dark'}>Get Started</StyledButton>
            <StyledButton type='banner2' theme={isLightTheme? 'light':'dark'}>Sign-in</StyledButton>
            <IconButton iconSrc={ResidentialIcon} label={"Residential Properties"} />
            <BasicFooter type={isLightTheme ? 'light' : 'dark'} />

            <AuthLayout theme={isLightTheme ? 'light' : 'dark'}  />
        </MantineProvider>
    );
};

export default Home;
